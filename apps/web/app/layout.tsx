import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Lumen Atelier | Modern Clothing for Everyday Luxury",
  description:
    "Discover elevated everyday clothing at Lumen Atelier. Thoughtful essentials, tailored silhouettes, and contemporary pieces designed to move with you.",
};

function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold tracking-[0.2em] text-slate-950">
            LA
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.2em] text-slate-100">
              LUMEN ATELIER
            </span>
            <span className="text-xs text-slate-400">
              Modern Clothing House
            </span>
          </div>
        </div>
        <nav className="hidden gap-8 text-xs font-medium tracking-[0.18em] text-slate-300 md:flex">
          <Link href="/new-arrivals" className="hover:text-slate-50">
            NEW IN
          </Link>
          <Link href="/products" className="hover:text-slate-50">
            PRODUCTS
          </Link>
          <Link href="/women" className="hover:text-slate-50">
            WOMEN
          </Link>
          <Link href="/men" className="hover:text-slate-50">
            MEN
          </Link>
          <Link href="/story" className="hover:text-slate-50">
            STORY
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200 ring-offset-slate-950 transition hover:border-slate-600 hover:bg-slate-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 md:inline-flex">
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span>In-season capsule</span>
          </button>
          <button
            aria-label="Open shopping bag"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-sm font-medium text-slate-100 shadow-sm shadow-black/40 ring-offset-slate-950 transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
          >
            0
          </button>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-slate-950 text-slate-50">
          <NavBar />
          <main className="pt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
