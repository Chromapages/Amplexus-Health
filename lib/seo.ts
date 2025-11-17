import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amplexushealth.com";

interface SEOParams {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: SEOParams): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image || `${siteUrl}/og-default.jpg`;

  return {
    title: `${title} | Amplexus Health`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Amplexus Health`,
      description,
      url,
      siteName: "Amplexus Health",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Amplexus Health`,
      description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
