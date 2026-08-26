"use client"

import { Product } from "@/sanity/lib/sanity.types";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";


export default function AddToCartButton({ product, className }: { product: Product, className: string }) {
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