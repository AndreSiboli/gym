import "./globals.scss";
import { Poppins } from "next/font/google";

import Navbar from "@/app/components/Navbar/Index";
import Footer from "@/app/components/layout/Footer";
import { CartProvider } from "@/@context/Cart";
import { MessageProvider } from "@/@context/Message";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
