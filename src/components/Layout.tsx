import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col pt-24 md:pt-32">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
