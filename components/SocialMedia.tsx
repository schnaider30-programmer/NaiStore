import { SocialLinks } from "@/lib/data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SocialMedia({
  className,
  iconClassName,
  tooltipClassName,
}: {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}) {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {SocialLinks?.map((link) => (
          <Tooltip key={link.title}>
            <TooltipTrigger
              className={cn(
                "p-2 border rounded-full hover:text-white hover:border-shop-light-green hoverEffect",
                iconClassName,
              )}
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={link?.href}
                key={link?.title}
              >
                {link.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-dark-color font-semibold",
                tooltipClassName,
              )}
            >
              {link.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
