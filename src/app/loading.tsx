import React from "react";
import { Ripple } from "react-css-spinners";

const loading = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Ripple
        color="#5eead4"
        size={100}
        thickness={7}
      />
    </div>
  );
};

export default loading;