import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'MVFLEX - Construction Company',
  description: 'Building the Future with Excellence | Premium Construction Services',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mvflex.com',
    title: 'MVFLEX - Construction Company',
    description: 'Building the Future with Excellence | Premium Construction Services',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-poppins`}>
        {children}
      </body>
    </html>
  );
}
