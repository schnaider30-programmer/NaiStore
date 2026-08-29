import { Product } from "@/sanity.types";
import { getBrand } from "@/sanity/queries";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default async function ProductCharacteristics({
  product,
}: {
  product: Product | null | undefined;
}) {
  const brand = await getBrand(product?.slug?.current as string);
  console.log(brand);

  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger>{product?.name}: Characteristics</AccordionTrigger>
        <AccordionContent>
          <p className="flex items-center justify-between">
            Brand:{" "}
            {brand && (
              <span className="font-semibold tracking-wide">
                {brand[0]?.brandName}
              </span>
            )}
          </p>
          <p className="flex items-center justify-between">
            Collection:{" "}
            <span className="font-semibold tracking-wide">2025</span>
          </p>
          <p className="flex items-center justify-between">
            Type:{" "}
            <span className="font-semibold tracking-wide capitalize">
              {product?.variant}
            </span>
          </p>
          <p className="flex items-center justify-between">
            Stock:{" "}
            <span className="font-semibold tracking-wide">
              {product?.stock}
            </span>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};