import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import LogoText from "./LogoText";

export default function Logo({
  textClassName,
  width,
  height,
  imageClassName,
}: {
  textClassName?: string;
  width?: number;
  height?: number;
  imageClassName?: string;
}) {
  return (
    <Link className="flex-row items-center group inline-flex" href={"/"}>
      <Image
        className={cn("py-2 w-8 md:w-16 h-auto", imageClassName)}
        width={width ?? 64}
        height={height ?? 64}
        src="/naiStore-optimized.png"
        alt="Nai Online Store Logo"
      ></Image>
      <LogoText className="tracking-wide" />
    </Link>
  );
}
