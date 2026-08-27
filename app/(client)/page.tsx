import { Button } from "shadcnComponents/button";
import type { ComponentProps } from "react";
import Container from "@/components/Container";
import Homebanner from "@/components/Homebanner";
import ProductGrid from "@/components/ProductGrid";
import HomeCategories from "@/components/HomeCategories";
import { getCategories } from "@/sanity/queries";
import ShopByBrand from "@/components/ShopByBrand";
import LatestBlog from "@/components/LatestBlog";

export default async function Home() {
  // NOTE: sanityFetch returns `unknown` by default because its generic type
  // isn’t wired to our Sanity schema. To align with the prop type expected
  // by HomeCategories (Category[]), we assert the result as
  // ComponentProps<typeof HomeCategories>["categories"]. This keeps the
  // fetch result consistent with the component’s props until sanityFetch
  // is retyped to return Category[] directly.

  const categories = (await getCategories(6)) as ComponentProps<
    typeof HomeCategories
  >["categories"];
  return (
    <Container>
      <Homebanner />
      <ProductGrid />
      <HomeCategories categories={categories} />
      <ShopByBrand />
      <LatestBlog/>
    </Container>
  );
}
