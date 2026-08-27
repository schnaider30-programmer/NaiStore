import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { Title } from "@/components/Text";
import { getDealProducts } from "@/sanity/queries"

export default async function DealPage() {
  const hotProducts = await getDealProducts();
  return (
    <div className="py-10 bg-deal-bg ">
      <Container>
        <Title className="mb-5 underline underline-offset-4 decoration-1 text-base uppercase tracking-wide font-poppins md:text-2xl">Hot Deal of the Week</Title>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2.5">{hotProducts?.map
          //@ts-ignore
          ((product) => <ProductCard key={product?._id} product={product} />)}</div>
      </Container>
    </div>
  );
}
