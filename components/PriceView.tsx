import { cn } from "@/lib/utils"
import FormatPrice from "./FormatPrice"

export default function PriceView({price, discount, className} : {price: number|undefined, discount: number|undefined, className?:string}) {
    return (
        <div className={cn("flex items-center gap-1.5", className)}>
            <FormatPrice amount={price} className="text-shop-dark-green" />
            {price && discount && <FormatPrice amount={price + (discount * price) / 100} className="line-through font-normal text-shop-light-text"/>}
        </div>
    )
}