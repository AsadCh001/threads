import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import NextTopLoader from 'nextjs-toploader';

import "../globals.css";
import LeftBar from "@/components/shared/LeftBar";
import BottomBar from "@/components/shared/BottomBar";
import RightBar from "@/components/shared/RightBar";
import TopBar from "@/components/shared/TopBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={inter.className}>
          <NextTopLoader color="#29D" height={3} />
          <TopBar />

          <main className='flex flex-row'>
            <LeftBar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>
            {/* @ts-ignore */}
            <RightBar />
          </main>

          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
