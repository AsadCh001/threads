import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads App",
  description: "A Thread app utilizng next.js 14",
<<<<<<< HEAD
};
=======
}; 
>>>>>>> d7a3d227d0c53042346761d180475ae71f0d41e3

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className} bg-dark-1`}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
