"use client"
import { Category } from "@/sanity.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

export default function CategoryProducts({ categories, slug }: { categories: Category[], slug: string }) {
    const [currentSlug, setCurrentSlug] = useState(slug);
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    return (
        <div className="py-5 flex flex-col md:flex-row items-start gap-5">
            <div>{categories?.map((category) => (<Button key={category._id} className={`bg-transparent border-0 rounded-none text-dark-color shadow-none hover:bg-shop-orange hover:text-white font-semibold hoverEffect border-b last:border-b-0 capitalize`}>{category.title}</Button>))}</div>
        </div>
    )
}