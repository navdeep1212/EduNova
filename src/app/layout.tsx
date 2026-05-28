import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EduNova | Futuristic Student Learning Dashboard",
  description: "Experience your learning dashboard of the future with real-time course tracking, achievements, and dynamic schedules.",
  authors: [{ name: "Arjun Kumar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} dark h-full antialiased`} suppressHydrationWarning>
      <body className="font-sans bg-bg-deep text-slate-100 min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
