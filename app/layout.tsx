import type { Metadata } from "next";
import { Oswald, Lato } from "next/font/google"; // 1. Import the new fonts
import "./globals.css";

// 2. Configure Oswald for Headings
const oswald = Oswald({ 
  subsets: ["latin"], 
  variable: "--font-oswald",
  display: "swap",
});

// 3. Configure Lato for Body Text
const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["100", "300", "400", "700", "900"], // Lato requires explicit weights
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GICD | The Guardians Initiative for Community Development",
  description: "A research-driven organization empowering vulnerable populations and strengthening community resilience in Plateau State.",
  
  // Browser & Tab Icons
  icons: {
    icon: "/logo.jpg", 
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },

  // Social Media Previews
  openGraph: {
    title: "The Guardians Initiative for Community Development",
    description: "Empowering communities through evidence-based research and youth development.",
    url: "https://thegicd.org",
    siteName: "GICD Nigeria",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "GICD Logo",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  // Twitter/X Card
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
    // 4. Inject the new font variables into the HTML tag
    <html lang="en" className={`scroll-smooth ${oswald.variable} ${lato.variable}`}>
      {/* 5. Applied font-sans here so Lato becomes the default site-wide */}
      <body className="font-sans antialiased bg-white text-gicd-dark">
        {children}
      </body>
    </html>
  );
}