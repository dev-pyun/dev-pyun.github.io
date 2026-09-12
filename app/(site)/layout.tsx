import type { Metadata } from "next";
import "../globals.css";
import { archivo, PRETENDARD_CDN } from "../fonts";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/content/projects";

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.valueProp,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} · ${site.role}`,
    description: site.valueProp,
    url: site.url,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={archivo.variable}>
      <head>
        <link rel="stylesheet" href={PRETENDARD_CDN} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="plate sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-signal focus:bg-signal focus:px-3 focus:py-2 focus:!text-white"
        >
          본문으로 건너뛰기
        </a>
        <SiteHeader />
        <main
          id="main"
          className="mx-auto w-full max-w-[68rem] flex-1 px-5 py-12 sm:px-8 sm:py-16"
        >
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
