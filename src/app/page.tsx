"use client";

import React, { useState, useEffect } from "react";
import { Ripple } from "react-css-spinners";
import Home from "../../components/Home/Home";

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Ripple color="#d36ac2" size={100} thickness={7} />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default page;