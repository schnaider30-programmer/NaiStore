"use client";
import { Category, Product } from "@/sanity.types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import ProductCard from "./ProductCard";
import NoProductAvailable from "./NoProductAvailable";
import { Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function CategoryProducts({
  categories,
  slug,
}: {
  categories: Category[];
  slug: string;
}) {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function handleCategory(newSlug: string) {
    if (newSlug === currentSlug) return; //Prevent unnecessary updates
    setCurrentSlug(newSlug);
    router.push(`/category/${newSlug}`, { scroll: false }); // This is to update URL
  }

  async function fetchProduct(categorySlug: string) {
    setIsLoading(true);
    try {
      const query = `*[_type == 'product' && references(*[_type == 'category' && slug.current == $categorySlug]._id)] | order(name asc) {
            ..., "categories": categories[] -> title}`;
      const data = await client.fetch(query, { categorySlug });
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products by categories:", error);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct(currentSlug);
  }, [router]);
  return (
    <div className="py-5 flex flex-col md:flex-row items-center md:items-start gap-5">
      <div className="border gap-2.5 max-sm:flex max-sm:flex-wrap max-sm:p-2 max-sm:justify-start sm:grid  sm:grid-cols-4  md:flex  md:gap-0 md:flex-col md:min-w-45">
        {categories?.map((category) => (
          <Button
            onClick={() => handleCategory(category?.slug?.current as string)}
            key={category._id}
            className={`md:bg-transparent border-0 rounded-none text-dark-color shadow-none hover:bg-shop-orange hover:text-white font-semibold hoverEffect bg-gray-100 border-b border-shop-orange/30 transition-colors last:border-b-0 capitalize ${category.slug.current === currentSlug && "bg-shop-orange md:bg-shop-orange text-white"}`}
          >
            {category.title}
          </Button>
        ))}
      </div>
      <div className="flex-1">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10">
            <div className="space-x-2 flex items-center text-blue-600">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Product is loading...</span>
            </div>
          </div>
        ) : products.length ? (
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-5">
            {products.map((product: Product) => (
              <AnimatePresence key={product._id}>
                <motion.div>
                  <ProductCard product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        ) : (
          <NoProductAvailable selectedTab={currentSlug} className="mt-0" />
        )}
      </div>
    </div>
  );
}
