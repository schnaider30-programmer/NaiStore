import Link from "next/link";
import { Title } from "./Text";
import { getBrands } from "@/sanity/queries";
import { Brand } from "@/sanity/lib/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { extraData } from "@/lib/data";

export default async function ShopByBrand() {
  const brands: Brand[] = await getBrands();
  return (
    <div className="mb-10 lg:mb-20 bg-shop-light-bg p-5 lg:p-7 rounded-md w-full">
      <div className="flex items-center gap-5 justify-between mb-10">
        <Title className="md:text-2xl">Shop By Brands</Title>
        <Link
          href={"/shop"}
          className="text-sm hover:text-shop-btn-dark-green hoverEffect font-semibold tracking-wide hover:underline decoration-shop-btn-dark-green "
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {brands?.map((brand) => (
          <Link
            href={{
              pathname: "/shop",
              query: { brand: `${brand?.slug?.current}` },
            }}
            key={brand?._id}
            className="w-30 h-24 overflow-hidden shadow-xl flex items-center justify-center rounded-md hoverEffect hover:shadow-shop-dark-green/20"
          >
            {brand?.image && (
              <Image
                src={urlFor(brand?.image).url()}
                alt={`Image for ${brand?.title} brand`}
                width={250}
                height={250}
                className="w-full h-full"
              />
            )}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 p-2 shadow-sm hover:shadow-shop_light_green/20 py-5 cursor-default">
        {extraData.map((data) => (
          <div className="flex items-center gap-3 group text-lightColor hover:text-shop_light_green">
            <span className="inline-flex scale-100 group-hover:scale-105 hoverEffect group-hover:text-shop-light-green ">
              {data.icon}
            </span>
            <div className="text-sm group-hover:tracking-wide">
              <p className="text-darkColor/80 font-bold capitalize">
                {data.title}
              </p>
              <p className="text-lightColor">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
