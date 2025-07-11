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
        <title>Chef GPT</title>
        <meta name="description" content="" />
        <link rel="icon" href='/chef-gpt-icon.png' />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
