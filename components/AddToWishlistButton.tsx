import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";

export default function AddToWishlistButton({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <div className={cn("absolute top-2 right-2 z-10", className)}>
      <button className="p-1.5 rounded-full hover:bg-shop-dark-green hover:text-white hoverEffect bg-white">
        <Heart size={15} />
      </button>
    </div>
  );
}
