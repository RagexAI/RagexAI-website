import { useState, useEffect, type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalBackground from './GlobalBackground';
import PageLoader from './PageLoader';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* Show loader for 2 seconds, then fade out */
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Fixed full-screen AI sky background — behind everything */}
      <GlobalBackground />

      {/* Premium entrance loader */}
      <PageLoader visible={loading} />

      {/* Page layout */}
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
