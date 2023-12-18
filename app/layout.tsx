// app/layout.tsx
import React, { ReactNode, useEffect, useState } from 'react';
import './globals.css';
import Router from 'next/router';
import LoadingScreen from '@/components/LoadingScreen';
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return (
    <>
    {loading && <LoadingScreen />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
