/**
 * Renders /print to public/portfolio.pdf.
 *
 * Run against a live dev/preview server:  node scripts-pdf.mjs [url] [out]
 * Defaults: http://localhost:3000/print/ → public/portfolio.pdf
 *
 * The page box in app/(print)/print/print.css is deliberately 269mm rather
 * than the full 271mm printable height: a box that ends exactly on the page
 * boundary makes Chrome emit a blank leaf after every sheet.
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

const URL_ = process.argv[2] ?? "http://localhost:3000/print/";
const OUT = process.argv[3] ?? "public/portfolio.pdf";

const CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
];
const chrome = CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error("Chrome not found. Pass its path via CHROME env var.");
  process.exit(1);
}

execFileSync(
  process.env.CHROME ?? chrome,
  [
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${OUT}`,
    "--virtual-time-budget=15000",
    URL_,
  ],
  { stdio: "inherit" },
);
console.log(`wrote ${OUT}`);
