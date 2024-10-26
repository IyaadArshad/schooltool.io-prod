import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "School Tool",
  description: "All in one school technology platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
