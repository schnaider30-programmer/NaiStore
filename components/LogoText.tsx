import { cn } from "@/lib/utils";

export default function LogoText({ className }: { className?: string }) {
    return (
      <div className="ml-1 group">
        <span
          className={cn(
            "text-xl md:text-3xl text-shop-light-green text-shadow-shop-btn-dark-green text-shadow-2xs font-ubuntu group-hover:text-shop-dark-green hoverEffect",
            className,
          )}
        >
          Nai
        </span>
        <span
          className={cn(
            "text-xl md:text-3xl text-shop-dark-green text-shadow-shop-btn-dark-green text-shadow-2xs group-hover:text-shop-light-green hoverEffect font-ubuntu",
            className,
          )}
        >
          Store
        </span>
      </div>
    );
}