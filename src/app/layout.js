import "./globals.css";
import Link from "next/link";
import labInfo from "../../data/lab.json";

export const metadata = {
  title: labInfo.name,
  description: labInfo.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <header className="border-b sticky top-0 bg-white/90 backdrop-blur z-10">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              {labInfo.englishName}
            </Link>
            <ul className="flex gap-6 text-sm">
              <li><Link href="/members" className="hover:text-blue-600">Members</Link></li>
              <li><Link href="/publications" className="hover:text-blue-600">Publications</Link></li>
              <li><Link href="/news" className="hover:text-blue-600">News</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t py-6 text-center text-sm text-gray-500">
          © 2026 {labInfo.englishName}. All rights reserved.
        </footer>
      </body>
    </html>
  );
}