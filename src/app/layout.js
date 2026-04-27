import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "○○ 연구실",
  description: "연구실 공식 홈페이지",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <header className="border-b bg-white">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              ○○ Lab
            </Link>
            <ul className="flex gap-6 text-sm">
              <li><Link href="/research">RESEARCH</Link></li>
              <li><Link href="/people">PEOPLE</Link></li>
              <li><Link href="/publications">PUBLICATIONS</Link></li>
              <li><Link href="/news">NEWS</Link></li>
              <li><Link href="/opportunities">OPPORTUNITIES</Link></li>
              <li><Link href="/gallery">GALLERY</Link></li>
              <li><Link href="/contact">CONTACT</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t py-6 text-center text-sm text-gray-500">
          © 2026 ○○ Lab. All rights reserved.
        </footer>
      </body>
    </html>
  );
}