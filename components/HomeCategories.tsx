import { CategoryWithProductCount } from "@/sanity/queries";
import { Title, SubTitle } from "./Text";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function HomeCategories({
  categories,
}: {
  categories: CategoryWithProductCount[];
}) {
  return (
    <div className="bg-white border border-shop-light-green/20 my-10 md:my-20 p-5 lg:p-7 rounded-md font-poppins">
      <Title className="border-b pb-3 text-xl md:text-xl">
        Popular Categories
      </Title>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories?.map((category) => (
          <div
            key={category?._id}
            className="bg-shop-light-bg p-5 flex items-center gap-3 group"
          >
            {category?.image && (
              <div className="w-20 h-20 overflow-hidden border border-shop-orange/30 hover:border-shop-orange/70 rounded-md hoverEffect p-1">
                <Link href={`/category/${category?.slug?.current}`}>
                  <Image
                    src={urlFor(category?.image).url()}
                    alt={`Image of ${category?.title}`}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain group-hover:scale-110 hoverEffect"
                  />
                </Link>
              </div>
            )}
            <div className="space-y-1">
              <SubTitle className="text-base font-semibold text-shop-dark-green">
                {category?.title}
              </SubTitle>
              <p
                className={`${category.productCount > 0 ? "text-shop-light-green" : "text-red-600"} text-xs `}
              >
                {category?.productCount
                  ? `(${category?.productCount}) Items Available`
                  : "Unavailable"}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
