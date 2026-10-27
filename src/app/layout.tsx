import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Surulere Teens Debate & STEM Championship (STDSC)",
    template: "%s | STDSC",
  },
  description:
    "Official website of the Surulere Teens Debate & STEM Championship (STDSC), empowering secondary school students through competitive debate, STEM Olympiads, applied science innovation showcases, and the Young Leaders Network.",
  keywords: [
    "debate",
    "STEM",
    "Surulere",
    "teens",
    "championship",
    "Nigeria",
    "Lagos",
    "secondary school",
    "robotics",
    "science olympiad",
    "Young Leaders Network",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
