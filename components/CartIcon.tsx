import { ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function CartIcon() {
    return (
      <Link href={"/cart"} className="relative ">
        <ShoppingBag className="w-5 h-5 hover:text-shop-light-green hoverEffect" />
        <span className="absolute -top-1 -right-1 text-bold bg-shop-dark-green text-white h-3.5 w-3.5 rounded-full text-sm flex items-center justify-center font-semibold">
          0
        </span>
      </Link>
    );
}