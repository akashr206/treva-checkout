import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata = {
    title: "Treva",
    description: "Treva assignment",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} antialiased`}>
                <Navbar></Navbar>
                <main className="pt-16">{children}</main>
            </body>
        </html>
    );
}
