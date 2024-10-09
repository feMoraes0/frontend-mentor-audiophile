import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@styles/globals.scss";

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Audiophile e-commerce website",
  description: "Frontend Mentor | Audiophile e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        {children}
      </body>
    </html>
  );
}
