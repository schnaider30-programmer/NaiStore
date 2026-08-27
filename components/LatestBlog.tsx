import { getLatestBlog } from "@/sanity/queries";
import { Title } from "./Text";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Blog } from "@/sanity.types";
import { Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default async function LatestBlog() {
  const blogs = await getLatestBlog();

  return (
    <div className="mb-1 lg:mb-20">
      <Title className="text-xl md:text-2xl">Latest Blog</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {blogs?.map((blog) => (
          <div className="rounded-lg overflow-hidden" key={blog?._id}>
            <div>
              {blog.mainImage && (
                <Link href={`/blog/${blog?.slug?.current}`}>
                  <Image
                    src={urlFor(blog?.mainImage).url()}
                    alt={`${blog?.title}`}
                    width={500}
                    height={500}
                    className="w-full max-h-80 object-cover hover:scale-105 hoverEffect overflow-hidden"
                  />
                </Link>
              )}
            </div>
            <div className="bg-shop-light-bg p-5">
              <div className="text-xs flex items-center gap-5 font-ubuntu">
                <div className="flex items-center relative group cursor-pointer">
                  {blog?.blogcategories?.map((blogCat, index) => (
                    <p
                      key={index}
                      className="font-semibold text-shop-light-green tracking-wider"
                    >
                      {blogCat?.title}
                    </p>
                  ))}
                  <span className="absolute left-0 h-0.5 w-full bg-light-color/30 inline-block -bottom-1 group-hover:bg-shop-dark-green hoverEffect" />
                </div>
                <p className="flex items-center gap-0.5 group relative cursor-pointer hover:text-shop-btn-dark-green">
                  <Calendar size={15} />{" "}
                  {blog.publishedAt && formatDate(blog.publishedAt)}
                  <span className="absolute left-0 h-0.5 w-full bg-light-color/30 inline-block -bottom-1 group-hover:bg-shop-dark-green hoverEffect" />
                </p>
              </div>
              {blog?.title && (
                <Link href={`/blog/${blog?.slug?.current}`} className="line-clamp-2 text-sm font-poppins mt-5  font-semibold hover:text-shop-dark-green hoverEffect">
                  {blog?.title}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
