import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import { Title } from "@/components/Text";
import { getCategories } from "@/sanity/queries";

export default async function Category({ params }: {params: Promise<{slug: string}>}) {
    const categories = await getCategories();
    const { slug } = await params;
  return (
    <div className="py-10"> 
      <Container>
              <Title className="md:text-2xl">Product by Categories: <span className="font-bold text-shop-light-green">{slug && slug}</span></Title>
              <CategoryProducts categories={categories} slug={slug} />
      </Container>
    </div>
  );
}
