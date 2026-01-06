import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-display",
    display: "swap",
});

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600"],
    variable: "--font-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "LOOKSMAX ACADEMY | Elite Aesthetic Calibration",
    description:
        "The premier institution for aesthetic strategy and personal branding.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${cormorant.variable} ${manrope.variable}`}>
                {children}
            </body>
        </html>
    );
}
