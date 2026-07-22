import "./globals.css"
import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/shared/lib/utils";
import HeaderNav from "@/shared/components/layout/header-nav.component";
import RootProviders from "@/shared/providers/root-providers";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });


export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <head />
      <body>
        <RootProviders>
          <header>
            <HeaderNav />
          </header>
          {children}
        </RootProviders>
      </body>
    </html>
  );
}