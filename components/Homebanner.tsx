import Link from "next/link";
import {Title} from "./Text";
import Image from "next/image";
import { banner_1 } from "@/public/images";

export default function Homebanner() {
  return (
    <div className="py-16 md:py-0 bg-shop-light-pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title className="font-ubuntu">
          Grab Upto 50% on <br />
          Selected headphone
        </Title>
        <Link
          href={"/shop"}
          className="bg-shop-dark-green/90 text-white/90 px-5 py-2 rounded-md font-poppins font-semibold text-sm hover:text-white hover:bg-shop-dark-green "
        >
          Buy Now
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          className="hidden md:inline-flex w-96"
          alt="banner image"
        />
      </div>
    </div>
  );
}
