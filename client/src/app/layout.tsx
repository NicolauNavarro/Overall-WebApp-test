import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";


const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Overall WebApp",
  description: "The ultimate solution for students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
