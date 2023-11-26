import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Midtown Cinemas',
  description: 'Ticket Booking Service',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
