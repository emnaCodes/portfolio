"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "../../components/Home/Navbar/ResponsiveNav";
import { Ripple } from "react-css-spinners";
import React, { useState, useEffect } from "react";
import Footer from "../../components/Home/Footer/Footer";
import ScrollToTop from "../../components/Helper/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-[#0d0d1f]`}>
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Ripple color="#5eead4" size={100} thickness={7} />
          </div>
        ) : (
          <>
            <ResponsiveNav />
            {children}
            <Footer />
            <ScrollToTop />
          </>
        )}
      </body>
    </html>
  );
};