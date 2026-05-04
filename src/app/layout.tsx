import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "Dominate Event - Amira Mohamed | شطرنج المال",
  description: "الحدث الأكبر في مصر للسيطرة على أموالك وإدارة أعمالك مع أميرة محمد. احجز مكانك الآن في حدث شطرنج المال.",
  keywords: ["أميرة محمد", "شطرنج المال", "استثمار", "بيزنس", "ايفينت", "Dominate Event"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
