import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cathy Lyu | AI + English Education",
  description:
    "吕可欣 - 曼彻斯特大学教育学硕士，剑桥TKT认证教师。用AI重新定义英语教学，KET/PET/FCE专业教师。",
  keywords: ["英语教师", "AI教育", "KET", "PET", "FCE", "剑桥英语", "吕可欣"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
