import Image from "next/image";
import { cn } from "@/lib/cn";

export function Shot({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={cn("overflow-hidden bg-obsidian", className?.includes("absolute") ? "absolute" : "relative", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
