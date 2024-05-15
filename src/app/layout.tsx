import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/global/navbar/Navbar";
import Footer from "@/components/global/footer/Footer";

const myFontRegular = localFont({
  src: [
    {
      path: "../fonts/silka-regular-webfont.woff2",
    },
  ],
});

export const metadata: Metadata = {
  title: "3a Web Solutions",
  description: "Web Development & Design Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFontRegular.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
