import { CategoriesData, quickLinksData } from "@/lib/data";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./Text";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import LogoText from "./LogoText";

export default function FooterBottom() {
  return (
    <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="space-y-4">
        <LogoText
          className="md:text-2xl cursor-pointer tracking-wide"
        />
        <SubText>
          Discover curated furniture collections at NaiStore, blending style and
          confort to elevate your living spaces
        </SubText>
        <SocialMedia
          className="text-black/60"
          iconClassName="border-dark-color hover:border-shop-dark-green hover:text-shop-dark-green"
          tooltipClassName="bg-dark-color text-white"
        />
      </div>
      <div>
        <SubText className="font-poppins text-xl">Quick Links</SubText>
        <ul className="space-y-3 mt-4">
          {quickLinksData.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className="font-ubuntu hover:text-shop-light-green text-gray-600 font-medium"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <SubText className="font-poppins text-xl">Categories</SubText>
        <ul className="space-y-3 mt-4">
          {CategoriesData.map((link) => (
            <li key={link.title}>
              <Link
                href={`/categories/${link.href}`}
                className="font-ubuntu hover:text-shop-light-green text-gray-600 font-medium"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <SubTitle>Newsletter</SubTitle>
        <SubText className="font-poppins">
          Suscribe to our newsletters to receive updates and exclusive offers
        </SubText>
        <form className="space-y-3">
          <Input placeholder="Enter your email" type="email" required />
          <Button className="w-full">Suscribe</Button>
        </form>
      </div>
    </div>
  );
}
