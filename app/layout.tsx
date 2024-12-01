import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ClientWrapper } from "@/components/ui/toast/client-wrapper"
import { Toaster } from "@/components/ui/toaster"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TheDevArena | Technical Writing Agency',
  description: 'Professional technical writing services for modern businesses',
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