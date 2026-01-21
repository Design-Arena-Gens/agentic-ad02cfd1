const normalize = (url: string) => url.replace(/\/$/, "");

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return normalize(process.env.NEXT_PUBLIC_SITE_URL);
  }

  if (process.env.VERCEL_URL) {
    return normalize(`https://${process.env.VERCEL_URL}`);
  }

  if (process.env.NODE_ENV === "production") {
    return "https://agentic-ad02cfd1.vercel.app";
  }

  return "http://localhost:3000";
};
