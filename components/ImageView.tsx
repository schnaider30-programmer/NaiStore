"use client";

import {
  SanityImageAssetReference,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export type ImageViewType = {
  images: Array<{
    asset?: SanityImageAssetReference;
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  isInStock: boolean;
};
export default function ImageView({ images, isInStock }: ImageViewType) {
    const [active, setActive] = useState(images[0]);
  return (
    <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={active?._key}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.40, ease: "easeInOut" }}
          className="w-full max-h-137.5 min-h-112.5 border border-dark-color/10 rounded-md group overflow-hidden"
        >
          <Image
            src={urlFor(active).url()}
            alt="Product image view in big format"
            width={700}
            height={700}
            priority
            className={`w-full h-96 max-h-137.5 min-h-137-5 object-contain group-hover:scale-110 hoverEffect rounded-md ${isInStock ? "" : "opacity-50"}`}
          />
        </motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-6 gap-2 h-20 md:h-24">
        {images?.map((image) => (
          <button
            onClick={() => setActive(image)}
            key={image._key}
            className={`border rounded-md overflow-hidden ${active?._key === image._key ? "border-dark-color opacity-100" : "opacity-70"}`}
          >
            <Image
              src={urlFor(image).url()}
              width={100}
              height={100}
              alt="Product image thumbnail"
              className="w-full h-auto object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
