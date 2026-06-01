import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  metadataBase: new URL('https://studio-palomba-consulenza-lavoro-63b8f381.base44.app'),
  title: {
    default: 'Studio Palomba Consulenza Lavoro',
    template: '%s | Studio Palomba Consulenza Lavoro',
  },
  description:
    'Il tuo partner strategico per la gestione del personale e la consulenza del lavoro. Offriamo soluzioni su misura per imprese di medie e grandi dimensioni, basate su oltre 30 anni di esperienza.',
  icons: {
    icon: '/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Studio Palomba Consulenza Lavoro',
    description:
      'Il tuo partner strategico per la gestione del personale e la consulenza del lavoro. Offriamo soluzioni su misura per imprese di medie e grandi dimensioni, basate su oltre 30 anni di esperienza.',
    url: 'https://studio-palomba-consulenza-lavoro-63b8f381.base44.app',
    siteName: 'Studio Palomba Consulenza Lavoro',
    type: 'website',
    images: [
      {
        url: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/render/image/public/base44-prod/public/69777cbbba49d9f863b8f381/7dc4affa7_logo.png?width=1200&height=630&resize=contain',
        width: 1200,
        height: 630,
        alt: 'Studio Palomba Consulenza Lavoro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Palomba Consulenza Lavoro',
    description:
      'Il tuo partner strategico per la gestione del personale e la consulenza del lavoro. Offriamo soluzioni su misura per imprese di medie e grandi dimensioni, basate su oltre 30 anni di esperienza.',
    images: [
      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/render/image/public/base44-prod/public/69777cbbba49d9f863b8f381/7dc4affa7_logo.png?width=1200&height=630&resize=contain',
    ],
  },
  alternates: {
    canonical: 'https://studio-palomba-consulenza-lavoro-63b8f381.base44.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
