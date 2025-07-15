import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

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
        <link rel="icon" href='/saboria-icon.svg' />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
