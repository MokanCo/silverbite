import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/industries",
    "/portfolio",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-11-16"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
