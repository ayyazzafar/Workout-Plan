import React from "react";
import { metadata } from "../data";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>💪 {metadata.title}</h1>
      <p>{metadata.subtitle}</p>
    </header>
  );
};

export default Header;
