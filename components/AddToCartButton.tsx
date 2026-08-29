"use client"

import { Product, PRODUCT_BY_SLUG_QUERY_RESULT } from "@/sanity.types";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { DealProduct } from "@/lib/definition";

//  {
//   product: { stock?: number };
//   className: string;
// }
export default function AddToCartButton({ product, className }: { product: Product | PRODUCT_BY_SLUG_QUERY_RESULT | DealProduct, className?: string }) {
    const isOutStock = product?.stock === 0;
    const handleAddToCart = () => {
        window.alert("Added to cart")
    }
    return (
      <>
        <Button onClick={handleAddToCart} disabled={isOutStock} className={cn("w-full bg-shop-btn-dark-green/80 text-shop-light-bg shadow-none border border-shop-dark-green font-semibold tracking-wide hover:text-white hover:bg-shop-btn-dark-green hover:border-shop-dark-green hoverEffect", className)}>
          <ShoppingCart /> {isOutStock ? "Out of Stock" : "Add To Cart"}
        </Button>
      </>
    );
}