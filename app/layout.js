import { Content, Inter } from "next/font/google";
import { Onest } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const onest = Onest({ subsets: ["latin"] });


export const metadata = {
  title: "Menghui",
  description: "Menghui's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${onest.className}`}>{children}</body>
    </html>
  );
}
