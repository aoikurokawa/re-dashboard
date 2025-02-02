import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
        <div className="bg-black text-white min-h-screen flex">
          {/* Sidebar */}
          <aside className="w-64 min-h-screen p-6 border-r border-gray-700">
            <Link href="/" className="text-xl font-bold mb-4">
              Jito Restaking Dashboard
            </Link>
            <nav className="my-6">
              <ul className="space-y-3">
                <Link
                  href="/vaults"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Vaults
                </Link>
              </ul>
            </nav>
          </aside>

          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <input
                type="text"
                placeholder="Search by vault..."
                className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none"
              />
            </div>

            {/* Page Content */}
            <div className="p-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
