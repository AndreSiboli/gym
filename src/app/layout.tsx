import "./globals.scss";
import { Rubik } from "next/font/google";
import { Metadata } from "next";
import { CartProvider } from "@/@context/Cart";
import { MessageProvider } from "@/@context/Message";

import Navbar from "@/app/components/Navbar/Index";
import Footer from "@/app/components/layout/Footer";

const poppins = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Endurance",
  description: "This is a fictional site about a gym.",
  keywords: "gym, workout, dumbell",
  authors: [{ name: "André Siboli" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MessageProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </MessageProvider>
      </body>
    </html>
  );
}
