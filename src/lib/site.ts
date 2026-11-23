// Override when deploying this project on a different domain.
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://charlietravelscargo.com",
);
