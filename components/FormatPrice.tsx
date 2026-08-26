import { cn } from "@/lib/utils";

const FormatPrice = ({
  amount,
  className,
}: {
  amount: number | undefined;
  className?: string;
}) => {
  const formattedPrice = new Number(amount).toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 2,
  });
  return (
    <span className={cn("font-semibold text-sm text-dark-color", className)}>{formattedPrice}</span>
  );
};

export default FormatPrice;
