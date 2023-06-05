import "./globals.css"
import Navbar from "@/components/Navbar"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "ALAMSYAH",
    description: "My Personal Portfolio",
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body
                className={
                    inter.className +
                    " bg-gray-500 dark:bg-gray-700 transition-all duration-1000 dark:text-gray-300 text-gray-800"
                }
            >
                <div className='main '>
                    <Navbar />
                </div>
                <main className='app'>{children}</main>
            </body>
        </html>
    )
}
