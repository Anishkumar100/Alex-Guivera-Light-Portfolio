import { outfit, inter, firaCode, spaceGrotesk } from '../lib/fonts';
import './globals.css';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DottedSurface from '../components/ui/DottedSurface';
import SplashCursor from '../components/cursor/SplashCursor';
import PageTransition from '../components/transitions/PageTransition';
import { LenisProvider } from './providers/LenisProvider';

export const metadata = {
  title: 'ANTIGRAVITY — Designer Portfolio',
  description: 'Creative Director & Visual Architect — crafting interfaces that live between imagination and obsession.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${firaCode.variable} ${spaceGrotesk.variable}`}>
      <body>
        <DottedSurface />
        <SplashCursor />
        <Navbar />
        <LenisProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </LenisProvider>
        <Footer />
      </body>
    </html>
  );
}
