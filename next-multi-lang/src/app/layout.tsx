import "./globals.css";
import { Providers } from "@/providers";
import { Inter } from "next/font/google";

import type { ReactNode } from "react";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi-language Next.js App",
  description: "A demo of Next.js internationalization",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
