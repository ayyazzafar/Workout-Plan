import React from "react";
import { metadata } from "../data";

interface HeaderProps {
  onViewProfile: () => void;
  onEditData: () => void;
  personName: string;
}

const Header: React.FC<HeaderProps> = ({ onViewProfile, onEditData, personName }) => {
  return (
    <header className="header">
      <button className="edit-btn" onClick={onEditData} title="Edit Workout Plan">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>
      
      <div className="header-content">
        <h1>💪 {metadata.title}</h1>
        <p className="subtitle">{metadata.subtitle}</p>
        <div className="person-name-header">
          <div className="person-info">
            <span className="person-label">Personalized for</span>
            <span className="person-name">{personName}</span>
          </div>
          <button className="profile-view-btn" onClick={onViewProfile} title="View Profile">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
