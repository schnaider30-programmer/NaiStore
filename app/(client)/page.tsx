import { Button } from "shadcnComponents/button";
import Container from "@/components/Container";
import Homebanner from "@/components/Homebanner";
import ProductGrid from "@/components/ProductGrid";
import HomeCategories from "@/components/HomeCategories";
import { getCategories } from "@/sanity/queries";
import ShopByBrand from "@/components/ShopByBrand";
import LatestBlog from "@/components/LatestBlog";

export default async function Home() {
  const categories = await getCategories(6);
  return (
    <Container>
      <Homebanner />
      <ProductGrid />
      <HomeCategories categories={categories} />
      <ShopByBrand />
      <LatestBlog />
    </Container>
  );
}
