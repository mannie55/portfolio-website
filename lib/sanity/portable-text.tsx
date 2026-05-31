import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { sanityClient } from "@/lib/sanity/client";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source: SanityImageSource) {
  return builder.image(source).width(1200).url();
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold tracking-tight">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="leading-relaxed text-muted">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc space-y-2 pl-5 text-muted">{children}</ul>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return null;
      }

      const src = urlFor(value);
      return (
        <figure className="space-y-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-surface-elevated">
            <Image
              src={src}
              alt={value.caption ?? "Case study image"}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1024px"
            />
          </div>
          {value.caption ? (
            <figcaption className="text-center text-sm text-muted">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

type SanityPortableTextProps = {
  value: PortableTextBlock[];
};

export function SanityPortableText({ value }: SanityPortableTextProps) {
  return (
    <article className="mt-12 max-w-none space-y-6">
      <PortableText value={value} components={components} />
    </article>
  );
}
