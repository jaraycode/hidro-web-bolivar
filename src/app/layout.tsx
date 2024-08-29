import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HomeNavbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css";

config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hidro-web",
  description: "Landing page para la empresa hidrobolivar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        <HomeNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
