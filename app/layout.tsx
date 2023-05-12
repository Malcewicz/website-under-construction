import "./globals.css";
import { Rubik } from "next/font/google";
import Footer from "./footer";

const rubik = Rubik({
  subsets: ["latin-ext"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata = {
  title: "Page under construction",
  description:
    "This page is still under construction. Please come back in a few days!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
