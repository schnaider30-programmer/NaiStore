import { getProductBySlug } from "@/sanity/queries";

export default async function SingleProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    console.log(product)
    return (
        <div>
            Single Product Page
        </div>
    )
}