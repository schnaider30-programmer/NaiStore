import { Brand, Category, DEAL_PRODUCTS_RESULT, LATEST_BLOG_RESULT } from "@/sanity.types";
import { sanityFetch } from "../lib/live";
import { ALL_BRANDS, BRAND_QUERY, DEAL_PRODUCTS, LATEST_BLOG, PRODUCT_BY_SLUG_QUERY } from "./query";

export type CategoryWithProductCount = Category & {
  productCount: number;
};

const getCategories = async (
  quantity?: number,
): Promise<CategoryWithProductCount[]> => {
  try {
    const query = quantity
      ? `*[_type == 'category'] | order(name asc) [0...$quantity] {
        ...,
        "productCount":count(*[_type == "product" && references(^._id)])}`
      : `*[_type == 'category'] | order(name asc) {
        ...,
        "productCount": count(*[_type == "product" && references(^._id)])}`;
    const { data } = await sanityFetch({
      query,
      params: quantity ? { quantity } : {},
    });
    return (data as CategoryWithProductCount[]) ?? [];
  } catch (error) {
    console.log("Error fetching categories", error);
    return [];
  }
};

const getBrands = async () => {
  try {
    const { data } = await sanityFetch({ query: ALL_BRANDS });
    return (data as Brand[]) ?? [];
  } catch (error) {
    console.log("Error fetching brands:", error);
    return [];
  }
};

const getLatestBlog = async () => {
  try {
    const { data } = await sanityFetch({ query: LATEST_BLOG });
    return (data as LATEST_BLOG_RESULT) ?? [];
  } catch (error) {
    console.log("Error fetching latest blog:", error);
    return [];
  }
};

const getDealProducts = async () => {
    try {
        const { data } = await sanityFetch({ query: DEAL_PRODUCTS });
        return (data) ?? []
    } catch (error) {
        console.log("Error fetching hot deal products: ", error)
        return [];
    }
}

const getProductBySlug = async (slug: string) => {
  try {
    const {data} = await sanityFetch({ query: PRODUCT_BY_SLUG_QUERY, params: { slug } })
  return data ?? null;
  } catch (error) {
    console.error("Error fetching product by ID:", error)
    return null;
  }
}

const getBrand = async (slug: string) => {
  try {
    const data = await sanityFetch({
      query: BRAND_QUERY,
      params: {
        slug,
      },
    });
    return data.data || null;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

export {
  getCategories,
  getBrands,
  getLatestBlog,
  getDealProducts,
  getProductBySlug,
  getBrand
};
