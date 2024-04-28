import "./globals.scss";
import { Inter } from "next/font/google";

import Navbar from "@/app/components/Navbar/Index";
import Footer from "@/app/components/layout/Footer";
import { CartProvider } from "@/@context/Cart";
import { MessageProvider } from "@/@context/Message";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Endurance",
  description: "Endurance",
  author: "André Siboli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
