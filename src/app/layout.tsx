import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Kin - Write computer programs in Kinyarwanda',
  description:
    'A straightforward programming language created with the purpose of aiding Kinyarwanda speakers in easily learning programming.',
};

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body
        className={cn('antialiased', fontHeading.variable, fontBody.variable)}
      >
        {children}
      </body>
    </html>
  );
}
