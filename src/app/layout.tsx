import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "EN Propiedades",
  description: "Servicios Inmobiliarios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body >

          <ThemeProvider>{children}</ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}
