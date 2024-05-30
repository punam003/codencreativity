import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBanner from "@/components/ContactBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://codencreativity-o4ek.vercel.app"),
  title: "CodeNCreativity",
  description:
    "Code N Creativity offers comprehensive digital services, including web, mobile, and desktop app development, graphics design, poster design, logo design, brochure design, and digital marketing. Let us help you achieve your business goals with innovative and high-quality solutions.",
  keywords: [
    "digital services",
    " web development",
    " mobile app development",
    " desktop app development",
    " graphics design",
    " poster design",
    " logo design",
    " brochure design",
    " digital marketing",
    " Code N Creativity",
  ],
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/ico",
        url: "/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  openGraph: {
    title: "CodeNCreativity",
    description:
      "Code N Creativity offers comprehensive digital services, including web, mobile, and desktop app development, graphics design, poster design, logo design, brochure design, and digital marketing. Let us help you achieve your business goals with innovative and high-quality solutions.",
    url: "https://codencreativity-o4ek.vercel.app/",
    siteName: "CodeNCreativity",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  manifest: "/site.webmanifest",
  authors: [
    { name: "Aniket Saha", url: "https://github.com/fireFistAniket" },
    { name: "Dipannita Sarkar", url: "https://github.com/punam003" },
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export const viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <ContactBanner />
        <Footer />
      </body>
    </html>
  );
}
