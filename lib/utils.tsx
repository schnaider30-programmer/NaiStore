import { clsx, type ClassValue } from "clsx";
import { FlameIcon } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function displayStatus(status: string) {
  if (status === "sale")
    return (
      <p className="absolute top-2 left-2 z-10 text-xs border border-dark-color/50 px-2 rounded-full group-hover:border-shop-light-green hoverEffect group-hover:text-shop-light-green">
        Sale!
      </p>
    );
  if (status === "new")
    return (
      <p className="absolute top-2 left-2 z-10 text-xs border border-dark-color/50 px-2 rounded-full group-hover:border-shop-light-green group-hover:bg-shop-light-green/10 hoverEffect group-hover:text-shop-light-green">
        New!
      </p>
    );
  if (status === "hot")
    return (
      <Link
        href={"/deal"}
        className="absolute top-2 left-2 z-10 border border-shop-orange/50 p-1 rounded-full group-hover:border-shop-orange hover:text-shop-dark-green hoverEffect"
      >
        <FlameIcon
          size={18}
          fill="#fb6c08"
          className="text-shop-orange/50 group-hover:text-shop-orange hoverEffect group-hover:scale-105"
        />
      </Link>
    );
  return null;
}
