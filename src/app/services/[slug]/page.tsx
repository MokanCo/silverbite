import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceView } from "@/components/services/ServiceView";
import { getService, services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.intro,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceView service={service} />;
}
