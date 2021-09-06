import React from "react";
import { Link } from "react-router-dom";

export default function HeaderHome() {
  return (
    <div className="header-logo">
      <Link to="/">
        <span><p>S.</p></span>
      </Link>
      <Link to="/projects"><p>Projects</p></Link>
    </div>
  );
}
