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
  title: "Cathy Lyu | AI + Education Product & Curriculum",
  description:
    "吕可欣 - 国际名校教育学硕士，6年+K12英语线上+线下教育经验。字节跳动等头部公司的互联网经验，在新东方、环球趣学等北京知名教育机构积累了教学教研、用户运营的复合经验。AI native，独立开发英语教育AI网页，具备将AI能力转化为教育产品的实践经验。",
  keywords: ["AI教育", "教育产品", "教研", "KET", "PET", "剑桥英语", "吕可欣", "Prompt Engineering", "AI教学"],
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
