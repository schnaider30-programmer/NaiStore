import { defineQuery } from "next-sanity";

const ALL_BRANDS = defineQuery(`*[_type == 'brand'] | order(title asc)`);

const LATEST_BLOG = defineQuery(
  `*[_type == 'blog' && isLatest == true] | order(name asc){
  ...,
  blogcategories[] ->{
  title
  }
  }`,
);

const DEAL_PRODUCTS =
  defineQuery(`*[_type == 'product' && status == 'hot'] | order(name asc) {
    ..., "categories":categories[] -> title}`);

export { ALL_BRANDS, LATEST_BLOG, DEAL_PRODUCTS };
