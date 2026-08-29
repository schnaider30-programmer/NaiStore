import { DealProduct } from "@/lib/definition";
import { Product, PRODUCT_BY_SLUG_QUERY_RESULT } from "@/sanity.types";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function FavoriteButton({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product?: Product | DealProduct | PRODUCT_BY_SLUG_QUERY_RESULT;
}) {
  return (
    <>
      {!showProduct ? (
        <Link href={"/cart"} className="relative ">
          <Heart className="w-5 h-5 hover:text-shop-light-green hoverEffect" />
          <span className="absolute -top-1 -right-1 text-bold bg-shop-dark-green text-white h-3.5 w-3.5 rounded-full text-sm flex items-center justify-center font-semibold">
            0
          </span>
        </Link>
      ) : (
        <button className="group relative hover:text-shop-light-green hoverEffect border border-shop-light-green/80 hover:border-shop-light-green rounded-sm p-1.5 ">
          <Heart className="text-shop-light-green/80 group-hover:text-shop-light-green hoverEffect mt-0.5 w-5 h-5" />
        </button>
      )}
    </>
  );
}
