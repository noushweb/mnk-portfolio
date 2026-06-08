import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammed Noushad — Senior Product Designer",
  description:
    "Senior Product Designer in Dubai. 11+ years in UX/UI, design systems & AI-powered development. I design, build & ship — concept to deployed product, no handoffs.",
  metadataBase: new URL("https://enkay.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mohammed Noushad — Senior Product Designer",
    description:
      "Senior Product Designer in Dubai. 11+ years in UX/UI, design systems & AI-powered development. I design, build & ship — concept to deployed product, no handoffs.",
    url: "https://enkay.dev",
    siteName: "Mohammed Noushad",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohammed Noushad — Senior Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Noushad — Senior Product Designer",
    description:
      "Senior Product Designer in Dubai. 11+ years in UX/UI, design systems & AI-powered development.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${archivo.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen relative flex flex-col">
        <JsonLd />
        <ThemeProvider>
          <div className="grain" />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
