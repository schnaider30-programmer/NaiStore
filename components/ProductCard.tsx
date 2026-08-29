import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/sanity.types";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddToWishlistButton from "./AddToWishlistButton";
import { Title } from "./Text";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";
import { displayStatus } from "@/lib/utils";
import { DealProduct } from "@/lib/definition";



export default function ProductCard({ product }: { product: Product | DealProduct }) {
  const status = product.status ? displayStatus(product.status) : null;

  return (
    <div className="text-sm border border-dark-blue/20 rounded-md group bg-white group">
      <div className="relative group overflow-hidden bg-shop-light-bg">
        {status}
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product.images[0]).url()}
              alt={`${product.name} image`}
              width={700}
              height={700}
              loading="lazy"
              className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop-light-bg hoverEffect ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
            />
          </Link>
        )}

        <AddToWishlistButton product={product} />
      </div>
      <Link href={`/product/${product?.slug?.current}`}>
        <div className="p-3 flex flex-col">
          {product?.categories && (
            <p className="uppercase line-clamp-1 text-xs text-shop-light-text">
              {product.categories.map((cat) => cat).join(", ")}
            </p>
          )}
          <Title className="text-sm md:text-sm line-clamp-1">
            {product?.name}
          </Title>
          <div className="space-y-2 font-ubuntu">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  size={12}
                  key={index}
                  className={
                    index < 4
                      ? "text-shop-lighter-green"
                      : "text-shop-light-text"
                  }
                  fill={index < 4 ? "#93d991" : "#ababab"}
                />
              ))}
              <p className="text-shop-light-text text-xs tracking-wide">
                5 reviews
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <p className="font-medium">In Stock</p>
              <p
                className={`${product?.stock === 0 ? "text-red-600" : "text-shop-light-green"} font-semibold`}
              >
                {(product?.stock as number) > 0
                  ? product?.stock
                  : "unavailable"}
              </p>
            </div>
          </div>
          <PriceView price={product?.price} discount={product?.discount} />
        </div>
      </Link>

      <AddToCartButton
        product={product}
        className="w-36 rounded-full m-1 mt-0"
      />
    </div>
  );
}
