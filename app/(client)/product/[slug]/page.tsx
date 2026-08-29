import Container from "@/components/Container";
import DetailsView from "@/components/DetailsView";
import ImageView from "@/components/ImageView";
import { getProductBySlug } from "@/sanity/queries";
import { stegaClean } from "next-sanity";

export default async function SingleProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = stegaClean(await getProductBySlug(slug));
    const isInStock = (product?.stock ?? 0) > 0;
    return (
      <Container className="flex flex-col md:flex-row gap-10 py-10">
        {product?.images && (
          <ImageView images={product?.images} isInStock={isInStock} />
        )}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <DetailsView product={product} />
        </div>
      </Container>
    );
}