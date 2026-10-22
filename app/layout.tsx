import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'BSA College Singaraja | Mulai di Bali, Berkarier di Dunia', description: 'Kenali program Executive, Diploma 1 Culinary, Housekeeping & Food and Beverage Service, dan RPL Online di BSA College Singaraja. Bersama BSA, PASTI BISA!', icons: { icon: '/images/logo.png' } };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="id"><body>{children}</body></html>; }
