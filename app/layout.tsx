import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google"; // Optimized fonts
import "./globals.css";

// Font configurations for a professional academic and community feel
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "GICD | The Guardians Initiative for Community Development",
  description: "A research-driven organization empowering vulnerable populations and strengthening community resilience in Plateau State.",
  
  // 1. Browser & Tab Icons
  icons: {
    icon: "/logo.jpg", 
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },

  // 2. Social Media Previews (This makes the logo show up in links)
  openGraph: {
    title: "The Guardians Initiative for Community Development",
    description: "Empowering communities through evidence-based research and youth development.",
    url: "https://thegicd.org", // Replace with your actual domain
    siteName: "GICD Nigeria",
    images: [
      {
        url: "/logo.jpg", // The path to your logo
        width: 800,
        height: 800,
        alt: "GICD Logo",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  // 3. Twitter/X Card
  twitter: {
    card: "summary_large_image",
    title: "GICD Nigeria",
    description: "Evidence-based research and community development in Plateau State.",
    images: ["/logo.jpg"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} antialiased bg-white text-gicd-dark`}>
        {children}
      </body>
    </html>
  );
}