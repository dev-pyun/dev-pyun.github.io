import { Archivo } from "next/font/google";

/* Engraved panel lettering. Self-hosted at build time — the static export
   carries the face, with no runtime request to a third party. Shared by both
   root layouts so the screen panel and the printed sheet are cut in the same
   face; only the ground is inverted. */
export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo",
});

/* Korean body face, loaded from CDN. */
export const PRETENDARD_CDN =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";
