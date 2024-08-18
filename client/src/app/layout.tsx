import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
// Supports weights 100-900
import '@fontsource-variable/onest';


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
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
