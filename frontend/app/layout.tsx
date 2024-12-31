import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "./Components/nav/Navber";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "ScoreStream",
  description: "gaming Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
