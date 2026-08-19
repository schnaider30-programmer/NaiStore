import { cn } from "@/lib/utils";

export function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold md:text-3xl text-shop-dark-green capitalize tracking-wide font-sans",
        className,
      )}
    >
      {children}
    </h2>
  );
}
export function SubTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold text-gray-900 font-sans",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function SubText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
    }) {
    return <p className={cn("text-sm text-gray-60 font-poppins", className)}>{children}</p>
}
