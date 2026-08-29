import { PRODUCT_BY_SLUG_QUERY_RESULT } from "@/sanity.types";
import { LucidePackageCheck, LucidePackageX, StarIcon } from "lucide-react";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";
import FavoriteButton from "./FavoriteButton";

export default function DetailsView({
  product,
}: {
  product: PRODUCT_BY_SLUG_QUERY_RESULT;
}) {
  return (
    <>
      <div className="space-y-1 ">
        <h2 className="text-2xl font-bold text-shop-dark-green font-poppins">
          {product?.name}
        </h2>
        <p className="text-sm text-gray-600 tracking-wide font-ubuntu">
          {product?.description}
        </p>
        <div className="flex items-center gap-0.5 text-xs">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              size={12}
              className="text-shop-light-green"
              fill="#3b9c3c"
            />
          ))}
          <p>{`(120)`}</p>
        </div>
      </div>
      <div className="space-y-2 border-t border-b border-gray-200 py-5">
        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-lg font-bold"
        />
        <p
          className={`px-4 py-1.5 font-bold rounded-lg inline-block text-center text-sm ${(product?.stock ?? 0) > 0 ? "text-shop-dark-green bg-shop-light-green/30" : "text-red-500 bg-red-100"}`}
        >
          {(product?.stock ?? 0) > 0 ? (
            <span className="flex gap-1 items-center">
              <LucidePackageCheck size={15} /> In Stock
            </span>
          ) : (
            <span className="flex gap-1 items-center">
              <LucidePackageX size={15} />
              Out of Stock
            </span>
          )}
        </p>
      </div>
      <div className="flex items-center gap-2.5 lg:gap-5">
        <AddToCartButton className="flex-1 basis-0 min-w-0" product={product} />
        <FavoriteButton showProduct={true} product={product} />
      </div>
    </>
  );
}
