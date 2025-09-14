import React from "react";
import { metadata, person } from "../data";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>💪 {metadata.title}</h1>
      <p className="subtitle">{metadata.subtitle}</p>
      <div className="person-name-header">
        <span className="person-label">Personalized for</span>
        <span className="person-name">{person.name}</span>
      </div>
    </header>
  );
};

export default Header;
