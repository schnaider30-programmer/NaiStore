import { sanityFetch } from "../lib/live";
import { Brand } from "../lib/sanity.types";
import { ALL_BRANDS } from "./query";

const getCategories = async (quantity?:number) => {
    try {
        const query = quantity ? `*[_type == 'category'] | order(name asc) [0...$quantity] {
        ...,
        "productCount":count(*[_type == "product" && references(^._id)])}` : `*[_type == 'category'] | order(name asc) {
        ...,
        "productCount": count(*[_type == "product" && references(^._id)])}`;
        const { data } = await sanityFetch({ query, params: quantity ? { quantity } : {} })
        return data;
    } catch (error) {
        console.log("Error fetching categories",error)
        return [];
    }
} 

const getBrands = async () => {
    try {
        const { data } = await sanityFetch({ query: ALL_BRANDS });
        return data as Brand[] ?? [];
    } catch (error) {
        console.log("Error fetching brands:", error);
        return [];
    }
}

export {getCategories, getBrands }