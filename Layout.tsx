import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from './Footer';


interface LayoutProps {
  children: React.ReactNode;
  window?: () => Window;
}

const Layout = ({ children, window }: LayoutProps) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const handleThemeChange = () => {
      setDarkMode(localStorage.getItem('theme') === 'dark');
    };

    if (window) {
      window().addEventListener('storage', handleThemeChange);
    }
    return () => {
      if (window) {
        window().removeEventListener('storage', handleThemeChange);
      }
    };
  }, [window]);

  return (
    <>
      <Navbar window={window} />
      <main style={{ paddingTop: '64px', minHeight: "90vh" }}>{children}</main>
      <Footer darkMode={darkMode} />
    </>
  );
};

export default Layout;
