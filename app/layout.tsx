import "@/src/css/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dumarchat Gurvan",
  description: "Bienvenue sur mon portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
