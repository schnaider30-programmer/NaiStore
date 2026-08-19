import { headerData } from "@/lib/data";
import Logo from "./Logo";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
import useOutsideClick from "@/CustomsHooks/ClickOutsideHook";
import LogoText from "./LogoText";

export default function SideMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathName = usePathname();
  const sideBarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    isOpen && (
      <div
        className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl text-white/60 ${isOpen ? "translate-x-0" : "translate-x-full"} hoverEffect`}
      >
        <div
          ref={sideBarRef}
          className="min-w-72 max-w-96 bg-black/80 h-screen p-10  border-r-shop-light-green border-r-3 flex flex-col gap-6"
        >
          <div className="flex items-center justify-between gap-5">
            <LogoText className="text-2xl text-white group-hover:text-shop-light-green tracking-wide cursor-pointer" />
            <button
              title="Close"
              onClick={onClose}
              className="hover:text-shop-light-green hoverEffect "
            >
              <X />
            </button>
          </div>
          <div className="flex flex-col space-y-3.5 capitalize">
            {headerData?.map((link) => (
              <Link
                href={link.href}
                key={link.title}
                className={`hover:text-white hoverEffect ${pathName === link.href && "text-white"}`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <SocialMedia />
        </div>
      </div>
    )
  );
}
