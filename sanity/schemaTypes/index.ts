import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { addressType } from "./addressType";
import { authorType } from "./authorType";
import { blogContentType } from "./blogContentType";
import { productType } from "./productType";
import { orderType } from "./orderType";
import { brandType } from "./brandType";
import { blogType } from "./blogType";
import { blogCategoryType } from "./blogCategoryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    blogContentType,
    productType,
    orderType,
    brandType,
    blogType,
    blogCategoryType,
    authorType,
    addressType,
  ],
};
