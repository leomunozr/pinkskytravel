import type { Metadata } from "next";
import ThemeRegistry from "@/app/providers/ThemeRegistry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pink Sky Travel",
  description: "Agencia de viajes a la medida en México",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
