import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Rajdhani, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Seisuke's Portfolio",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-sm sm:text-base">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          "font-roboto",
          inter.variable,
          rajdhani.variable,
          roboto.variable,
        )}
      >
        {children}
        <footer className="z-50 bg-black py-2 text-center text-sm text-white">
          <p>©Seisuke Yamada All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
