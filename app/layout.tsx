import { Ubuntu, Poppins } from "next/font/google";


const poppins = Poppins({ weight: ["500", "700", "900"], subsets: ["latin"], variable: "--font-poppins" })
const ubuntu = Ubuntu({weight:["300", "400", "700"], subsets:["latin"], variable:"--font-ubuntu"})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${poppins.variable} ${ubuntu.variable}`}>
            <body>
                {children}
            </body>
        </html>
    )
}