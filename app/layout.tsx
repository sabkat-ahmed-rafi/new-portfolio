import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Preloader from "./components/Preloader/Preloader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: `Who 🤍 Coding </>`,
  description: "This is Subkat Ahmed Rafi's portfolio",
};

export default function RootLayout( { children }: Readonly<{ children: React.ReactNode }> ) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
