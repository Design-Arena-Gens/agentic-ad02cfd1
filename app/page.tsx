import Image from "next/image";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { dishes } from "@/data/dishes";
import { getBaseUrl } from "@/lib/site";

export default function Home() {
  const baseUrl = getBaseUrl();

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
              Atelier Supper Club
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Tasting Menu
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600">
              Explore each dish by scanning the QR code. Guests can view full
              descriptions, tasting notes, and pairing recommendations right on
              their phones.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
            <h2 className="text-sm uppercase tracking-wide text-zinc-500">
              How it works
            </h2>
            <ol className="mt-4 space-y-3 text-sm text-zinc-600">
              <li>1. Open your camera or QR reader on your phone.</li>
              <li>2. Hover over the QR code for the dish you&apos;re curious about.</li>
              <li>3. Follow the link to explore the story behind the plate.</li>
            </ol>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => {
          const qrValue = `${baseUrl}/menu/${dish.slug}`;

          return (
            <article
              key={dish.slug}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-56 w-full overflow-hidden bg-zinc-200">
                <Image
                  src={dish.image}
                  alt={`${dish.name} plating`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col gap-5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                      {dish.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                      {dish.description}
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-600">
                    {dish.price}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                    Ingredients
                  </h3>
                  <ul className="mt-3 space-y-1 text-sm text-zinc-600">
                    {dish.ingredients.map((ingredient) => (
                      <li key={ingredient}>• {ingredient}</li>
                    ))}
                  </ul>
                  {dish.dietary?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {dish.dietary.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-amber-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="mt-auto flex items-center justify-between gap-4">
                  <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-inner">
                    <QRCodeSVG
                      value={qrValue}
                      size={124}
                      level="M"
                      includeMargin
                      fgColor="#1c1917"
                    />
                  </div>
                  <Link
                    href={`/menu/${dish.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-900 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
                  >
                    View dish
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </main>
    </div>
  );
}
