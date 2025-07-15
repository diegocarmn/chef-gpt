import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <head>
        <title>SaborIA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/saboria-icon.svg" />
        <meta property="og:url" content="https://saboria.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SaborIA" />
        <meta
          property="og:description"
          content="Encontre receitas com ingredientes que você tem em casa!"
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/72a7d4d5-cde1-4908-819c-deabc2a877f9.png?token=zCECoBGqhOj3Gk1fFYxgObMMmQ-hT9lH5-6g58Gipwg&height=661&width=717&expires=33288567468"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
