import { defineQuery } from "next-sanity";

const ALL_BRANDS = defineQuery(`*[_type == 'brand'] | order(title asc)`);

export {ALL_BRANDS}