import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ClientWrapper } from "@/components/ui/toast/client-wrapper"
import { Toaster } from "@/components/ui/toaster"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ScrollToTop from "@/components/scroll-to-top";
import LoadingScreen from '@/components/loading-screen';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TheDevArena | Technical Writing Agency',
  description: 'Professional technical writing services for modern businesses',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    shortcut: ['/favicon.ico'],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ClientWrapper>
            <LoadingScreen />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Toaster />
            <ScrollToTop />
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}