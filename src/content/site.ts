export const site = {
  name: "Silverbite Technologies",
  shortName: "Silverbite",
  slogan: "We Build What Moves Your Business Forward.",
  description:
    "Silverbite Technologies designs and builds websites, mobile apps, custom software, AI, and automation that help ambitious businesses move forward.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
};

function socialHref(value: string | undefined) {
  if (!value) return "";
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return "";
    return url.toString();
  } catch {
    return "";
  }
}

const socialCatalog = [
  { label: "LinkedIn", href: socialHref(process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN) },
  { label: "Instagram", href: socialHref(process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM) },
  { label: "Facebook", href: socialHref(process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK) },
  { label: "X", href: socialHref(process.env.NEXT_PUBLIC_SOCIAL_X) },
];

export const socialMarks = socialCatalog;
export const socialProfiles = socialCatalog.filter((profile) => profile.href);

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: site.slogan,
    ...(site.email ? { email: site.email } : {}),
    ...(site.phone ? { telephone: site.phone } : {}),
  };
}
