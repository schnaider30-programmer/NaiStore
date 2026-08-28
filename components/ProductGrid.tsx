"use client";
import { useEffect, useState } from "react";
import HomeTab from "./HomeTab";
import { ProductType } from "@/lib/data";
import { client } from "@/sanity/lib/client";
import { AnimatePresence, motion } from "motion/react";
import { Loader2 } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import { Product } from "@/sanity.types";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(ProductType[0]?.value);
  const query: string = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
}`;
  const params = { variant: selectedTab.toLowerCase() };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await client.fetch(
          query,
          params as Record<string, unknown>,
        );
        setProducts(response);
        console.log(products);
      } catch (error) {
        console.error("Fetching product data error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);
  return (
    <div>
      <HomeTab selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10">
          <motion.div className="space-x-2 flex items-center text-blue-600">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Product is loading...</span>
          </motion.div>
        </div>
      ) : products?.length ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10 ">
          {products.map((product) => (
            <AnimatePresence key={product._id}>
              <motion.div layout initial={{opacity:0.2}} animate={{opacity: 1}} exit={{opacity: 0}}>
                {/* <ProductCard {...product} /> I could also use the spead operator if i code the productCart components to accept directly a props of type product instead of destructuring the props */}
                <ProductCard product={ product} />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </div>
  );
}
