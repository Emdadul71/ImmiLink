import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./../styles/main.scss";

const ibm = IBM_Plex_Sans({
  variable: "--font-ibm",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Immi Link",
  description: "Explore theCanadian Dream",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibm.className}>{children}</body>
    </html>
  );
}
