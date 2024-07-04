// app/layout.tsx
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';

const spaceGrotest = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Property Estate',
  description: 'CharltonK Dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotest.className}`}>
        <Header />
        <Layout>
          {children}
        </Layout>
        <Footer />
      </body>
    </html>
  );
}
