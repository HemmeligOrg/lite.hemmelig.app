import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>
          Hemmelig.app - paste a password, secret message or private
          information.
        </title>

        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="title"
          content="Paste a password, secret message or private information."
        />
        <meta
          name="description"
          content="Keep your sensitive information out of chat logs, emails, and more with encrypted secrets."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lite.hemmelig.app/" />
        <meta
          property="og:title"
          content="Paste a password, secret message or private information."
        />
        <meta
          property="og:description"
          content="Keep your sensitive information out of chat logs, emails, and more with encrypted secrets."
        />
        <meta property="og:image" content="/icons/icon-512x512.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lite.hemmelig.app/" />
        <meta
          property="twitter:title"
          content="Paste a password, secret message or private information."
        />
        <meta
          property="twitter:description"
          content="Keep your sensitive information out of chat logs, emails, and more with heavily
                    encrypted secrets."
        />
        <meta property="twitter:image" content="/icons/icon-512x512.png" />

        <meta name="theme-color" content="#231e23" />

        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="max-w-4xl mx-4 mb-12 md:mb-0 md:mx-auto">
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
