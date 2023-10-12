import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Register1 from "./userlogin/Register";
import Login from "./userlogin/Login";
import AllNews from "./components/AllNews";
import Search from "./components/Search";
function Pathfile() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/newslist" element={<AllNews />} />
        <Route path="/register" element={<Register1 />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};
export default Pathfile;
