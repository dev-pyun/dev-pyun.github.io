import type { Metadata } from "next";
import { archivo, PRETENDARD_CDN } from "../fonts";
import { site } from "@/content/projects";

/**
 * The print group's own root. It deliberately does NOT load globals.css and
 * carries no header, footer, skip link, or content column — a printed sheet
 * has no site chrome. Only the engraved face is shared with the screen panel;
 * the paper world's tokens live in print/print.css, scoped to .sheet.
 */
export const metadata: Metadata = {
  title: `${site.name} · 포트폴리오`,
  description: site.valueProp,
  robots: { index: false, follow: false },
};

export default function PrintRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={archivo.variable}>
      <head>
        <link rel="stylesheet" href={PRETENDARD_CDN} />
      </head>
      <body>{children}</body>
    </html>
  );
}
