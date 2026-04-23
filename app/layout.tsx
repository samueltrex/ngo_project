import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GICD | The Guardians Initiative for Community Development",
  description: "A child-focused organization dedicated to protecting children and empowering youth in Jos, Plateau State.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gicd-dark">
        {/* We keep the layout minimal so your page.tsx 
            controls the header and footer specifically for GICD */}
        {children}
      </body>
    </html>
  );
}