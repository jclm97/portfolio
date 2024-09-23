import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/components/utils/ThemeProvider";
import ThemeProvider from "@/components/utils/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samir Hassen",
  description: "Just a dude on the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
