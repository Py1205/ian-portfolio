import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono, Lora, Geist_Mono } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ian Pan - Senior Product Designer",
  description:
    "Hi, I'm Ian, a Senior Product Designer based in the SF Bay Area, currently designing at Marqeta, a fintech company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${ibmPlexMono.variable} ${lora.variable} ${geistMono.variable} ${GeistPixelSquare.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Set theme before paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'light';if(t==='dark')document.documentElement.classList.add('dark');})();`,
          }}
        />
        {/* Favicon — ThemeToggle updates href dynamically */}
        <link rel="icon" id="favicon-dynamic" href={`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#d97706"/></svg>')}`} />
      </head>
      <body><CustomCursor />{children}</body>
    </html>
  );
}
