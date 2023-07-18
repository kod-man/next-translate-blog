import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import React from "react";
import i18n from "../../../i18n";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Translate Starter",
  description: "A starter for Next.js with translation and localization",
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!i18n.locales.includes(lang)) {
    redirect(`/${i18n.defaultLocale}/${lang}`);
  }
  return (
    <html lang={lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
