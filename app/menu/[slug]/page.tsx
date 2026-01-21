import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";
import { dishes } from "@/data/dishes";
import { getBaseUrl } from "@/lib/site";

type DishPageProps = {
  params: { slug: string };
};

const getDish = (slug: string) => dishes.find((dish) => dish.slug === slug);

export function generateStaticParams() {
  return dishes.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: DishPageProps): Metadata {
  const dish = getDish(params.slug);

  if (!dish) {
    return {
      title: "Dish not found",
    };
  }

  const title = `${dish.name} — Atelier Supper Club`;
  const description = `${dish.description} Ingredients: ${dish.ingredients.join(", ")}`;
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/menu/${dish.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: dish.image,
          alt: `${dish.name} plating`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [dish.image],
    },
  };
}

export default function DishPage({ params }: DishPageProps) {
  const dish = getDish(params.slug);

  if (!dish) {
    notFound();
  }

  const baseUrl = getBaseUrl();
  const shareUrl = `${baseUrl}/menu/${dish.slug}`;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 pb-16 pt-12">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            <span aria-hidden>←</span>
            Back to menu
          </Link>
          <span className="text-xs uppercase tracking-[0.4em] text-amber-400">
            Atelier Supper Club
          </span>
        </nav>

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
          <div className="relative h-[420px] w-full bg-zinc-800">
            <Image
              src={dish.image}
              alt={`${dish.name} plating`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          <div className="grid gap-10 px-8 py-10 md:grid-cols-[2fr,1fr] md:items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
                Signature Dish
              </div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {dish.name}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-zinc-300">
                  {dish.description}
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-400">
                  Composition
                </h2>
                <ul className="mt-4 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
                  {dish.ingredients.map((ingredient) => (
                    <li
                      key={ingredient}
                      className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              {dish.dietary?.length ? (
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-400">
                    Dietary Notes
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {dish.dietary.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1 text-xs font-medium uppercase tracking-wide text-amber-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <aside className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-200">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">
                  Tasting Notes
                </h2>
                <p className="mt-3 leading-relaxed text-zinc-300">
                  Chef recommends savoring the dish from center to edge to
                  experience the gradient of smoke, acid, and texture. Pair with
                  a crisp Albariño or mineral-driven Chardonnay.
                </p>
              </div>

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">
                  Chef&apos;s Pairing
                </h2>
                <ul className="mt-3 space-y-2 text-zinc-300">
                  <li>• Vintage sourdough with cultured butter</li>
                  <li>• Seasonal micro herb salad</li>
                  <li>• Sommelier&apos;s pairing flight add-on</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-400/30 bg-black/60 p-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">
                  Scan to revisit
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                  Share the experience or keep the memory. Save this QR code to
                  revisit the dish anytime.
                </p>
                <div className="mt-4 flex justify-center rounded-2xl border border-white/10 bg-white p-4">
                  <QRCodeSVG
                    value={shareUrl}
                    size={156}
                    level="M"
                    includeMargin
                    fgColor="#1c1917"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                <span className="text-sm font-semibold text-white">
                  {dish.price}
                </span>
                <span className="text-xs uppercase tracking-[0.32em] text-amber-400">
                  Chef&apos;s table
                </span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
