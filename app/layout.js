import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Allora Solutions | We build the future your brand deserves.",
  description:
    "Allora Solutions is a premium digital studio delivering websites, apps, content, marketing, AI chatbots, and automation for modern brands.",
  metadataBase: new URL("https://allorasolutions.com"),
  openGraph: {
    title: "Allora Solutions",
    description: "We build the future your brand deserves.",
    type: "website",
    url: "https://allorasolutions.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "Allora Solutions",
    description: "We build the future your brand deserves."
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://unpkg.com/split-type@0.3.4/umd/index.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
