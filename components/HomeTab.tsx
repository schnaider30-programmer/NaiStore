import { ProductType } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";

export default function HomeTab({selectedTab, onTabSelect} : {selectedTab: string, onTabSelect: (tab: string) => void}) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-3 text-sm font-semibold">
        {ProductType.map((p) => (
          <Button
            key={p.title}
            className={`border border-shop-light-green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop-light-green hover:border-shop-light-green hoverEffect text-black font-poppins hover:text-white ${selectedTab === p.value ? "bg-shop-light-green text-white" : "bg-shop-light-green/20"}`} onClick={() => onTabSelect(p.value)}
          >
            {p.title}
          </Button>
        ))}
      </div>
      <Link
        href={"/shop"}
        className={`border border-shop-light-green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop-light-green hover:border-shop-light-green hoverEffect font-poppins hover:text-white`}
      >
        See All
      </Link>
    </div>
  );
}
