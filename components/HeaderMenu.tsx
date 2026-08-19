"use client";
import Link from "next/link";
import { headerData } from "@/lib/data";
import { usePathname } from "next/navigation";

export default function HeaderMenu() {
  const pathName = usePathname();
  return (
    <nav className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-light-color">
      {headerData?.map((link) => (
        <Link
          href={link?.href}
          key={link?.title}
          className={`hover:text-shop-light-green font-poppins hoverEffect relative group ${pathName === link.href && "text-shop-light-green"}`}
        >
          {link?.title}
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop-light-green group-hover:w-1/2 hoverEffect ${pathName === link.href && "w-1/2"}`}
          />
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop-light-green group-hover:w-1/2 hoverEffect ${pathName === link.href && "w-1/2"}`}
          />
        </Link>
      ))}
    </nav>
  );
}
