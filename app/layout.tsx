import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Стоматология в Бишкеке | AlaMed Clinic",
  description:
    "Премиальный адаптивный шаблон сайта для частной стоматологии или многопрофильной клиники в Бишкеке.",
  openGraph: {
    title: "Стоматология в Бишкеке | AlaMed Clinic",
    description:
      "Спокойное лечение, понятный план и запись через WhatsApp в современной частной клинике.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "ru_KG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Стоматология в Бишкеке | AlaMed Clinic",
    description:
      "Спокойное лечение, понятный план и запись через WhatsApp в современной частной клинике.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
