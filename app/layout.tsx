import { Metadata } from "next";

import "raf/polyfill";
import "setimmediate";

import "@repo/tailwind-config/global.css";

export const metadata: Metadata = {
  title: "Create My App",
  description: "A description of my app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="antialiased">
        <>{children}</>
      </body>
    </html>
  );
}
