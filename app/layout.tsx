import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DTP 行业认知 · 数据视角",
  description: "以数据视角梳理 DTP 行业的盈利结构与逻辑",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className={`${geist.variable} h-full`}>
      <body className="min-h-full antialiased">
        {children}
        <div className="fixed bottom-6 right-6 z-40 pointer-events-none select-none">
          <span className="text-xs font-medium tracking-widest text-black/10">
            Freya Hu
          </span>
        </div>
        <Analytics />
      </body>
    </html>
  );
}