import type { Metadata } from "next";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "American Dream — Not a Mall. A Global Stage.",
  description:
    "The most powerful retail, entertainment & events platform in North America. 3M sq ft. 40M visitors. One address.",
  openGraph: {
    title: "American Dream — Not a Mall. A Global Stage.",
    description:
      "The most powerful retail, entertainment & events platform in North America.",
    images: ["/images/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white overflow-hidden">
        {children}
      </body>
    </html>
  );
}