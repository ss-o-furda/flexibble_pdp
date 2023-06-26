import { Footer, Navbar } from "@/components";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flexibble PDP",
  description:
    "Orest's PDP for salary bump! Please give me a lot of money to be happy! :)",
  viewport: { width: "device-width", initialScale: 1 },
  creator: "Orest Furda <orik7800@gmail.com>",
  openGraph: {
    title: "Flexibble PDP",
    description:
      "Orest's PDP for salary bump! Please give me a lot of money to be happy! :)",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
