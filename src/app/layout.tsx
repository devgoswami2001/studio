
import type {Metadata} from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a clean, modern font. Geist is also good.
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import CursorTrail from '@/components/effects/cursor-trail';
import ScrollFadeIn from '@/components/effects/scroll-fade-in';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ChartMind AI Showcase',
  description: 'Insightful intraday market move predictions with ChartMind AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <CursorTrail />
        <ScrollFadeIn />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
