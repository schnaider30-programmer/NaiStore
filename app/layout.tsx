import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({weight:["500", "700", "900"], subsets:["latin"], variable:"--font-poppins"})
const ubuntu = Ubuntu({weight:["300", "400", "700"], subsets:["latin"], variable:"--font-ubuntu"})

export const metadata: Metadata = {
  title: {
    template: "%s | Nai Online Store",
    default: "Home | Nai Online Store",
  },
  description:
    "This is an online store offering a variety of products including men's, women's, and kids' clothing.",
  authors: [{ name: "Schnaider Jean Louis" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${poppins.variable} ${ubuntu.variable}`}>
        <body>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
