import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "5A – Manufacturing design chairs and tables since 1986",
  description:
    "5A is a family company based in Istanbul, manufacturing design chairs and tables since 1986. Contract furniture for hospitality, offices, and public spaces.",
  keywords: "furniture design, chairs, tables, contract furniture, Istanbul, hospitality",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
