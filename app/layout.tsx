import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asolbs.com"),
  title: {
    default: "ASOL Business Solutions | Financial & Corporate Consultancy",
    template: "%s | ASOL Business Solutions",
  },
  description: "Leading professional services firm in Nigeria providing micro-credit, banking consultancy, credit analysis, and corporate advisory solutions.",
  keywords: ["Banking Consultancy", "Micro-credit Services", "Business Advisory", "Financial Management", "Corporate Support", "SME Funding Nigeria", "Credit Risk Management", "Arbitration Services"],
  authors: [{ name: "ASOL Business Solutions" }],
  creator: "ASOL Business Solutions",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://asolbs.com",
    title: "ASOL Business Solutions | Financial & Corporate Consultancy",
    description: "Expert financial administration, banking consultancy, and corporate support services for sustainable business growth.",
    siteName: "ASOL Business Solutions",
    images: [{
      url: "/icon.png", // Using the icon as the OG image for now
      width: 800,
      height: 600,
      alt: "ASOL Business Solutions Logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASOL Business Solutions",
    description: "Expert financial administration and corporate support services.",
    images: ["/icon.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    google: "k-qOMuAj5nvIQRwA-NTqJ-3Cn0JaRyn5uavs-5g1cX4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased flex flex-col min-h-screen font-sans`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
