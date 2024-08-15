import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/landingNav";
import DashNav from "@/components/global/dashNavbar";
import { headers } from "next/headers";

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
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const header_url = headersList.get("x-url") || "";
  const pathname = header_url.split(domain)[1] || "";

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={font.className}>
        {pathname === "/dashboard" ? <DashNav /> : <Navbar />}
        {children}
      </body>
    </html>
  );
}
