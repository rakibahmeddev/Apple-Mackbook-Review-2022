import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";

const Header = () => {
  // const [open, setOpen] = useState(false);
  return (
    <div className="header bg-emerald-500 text-white  py-4 px-20 flex justify-between items-center">
      <div className="logo">
        <h2 className="text-4xl font-bold">
          <Link to="/">M1 Cheap</Link>
        </h2>
      </div>
      <div className="menu md:flex gap-10 justify-end">
        <Nav to="/">Home</Nav>
        <Nav to="/review">Review</Nav>
        <Nav to="/dashboard">Dashboard</Nav>
        <Nav to="/blogs">Blogs</Nav>
        <Nav to="/contact">Contact</Nav>
      </div>
    </div>
  );
};

export default Header;
