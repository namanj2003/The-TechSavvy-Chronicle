import React from "react";
import Pathfile from "./Pathfile";
import "./newsapp.css";
import Footer from "./components/Footer";
function Mainhome() {
  return (
    <>
      <div style={{ textAlign: "center", width: "100%", minHeight: "92vh", margin: 0 }}>
        <Pathfile />
      </div>
      <Footer />
    </>
  );
}

export default Mainhome;
