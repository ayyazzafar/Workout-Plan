import React from "react";
import { metadata } from "../data";
import UserSwitcher from "./UserSwitcher";
import { UserProfile } from "../types";

interface HeaderProps {
  onViewProfile: () => void;
  onEditData: () => void;
  onExportData: () => void;
  onImportData: () => void;
  users: UserProfile[];
  currentUserId: string;
  currentUser: UserProfile;
  onUserChange: (userId: string) => void;
  onAddUser: () => void;
  onDeleteUser: (userId: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  onViewProfile,
  onEditData,
  onExportData,
  onImportData,
  users,
  currentUserId,
  currentUser,
  onUserChange,
  onAddUser,
  onDeleteUser,
}) => {
  return (
    <header className="header">
      <div className="header-top">
        <UserSwitcher 
          users={users}
          currentUserId={currentUserId}
          onUserChange={onUserChange}
          onAddUser={onAddUser}
          onDeleteUser={onDeleteUser}
        />
        <div className="header-buttons">
          <button
            className="import-btn"
            onClick={onImportData}
            title="Import Workout Plan"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </button>
          <button
            className="export-btn"
            onClick={onExportData}
            title="Export Workout Plan"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
          </button>
          <button
            className="edit-btn"
            onClick={onEditData}
            title="Edit Workout Plan"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="header-content">
        <h1>💪 {metadata.title}</h1>
        <p className="subtitle">{metadata.subtitle}</p>
        <div className="person-name-header">
          <div className="person-info">
            <span className="person-label">Personalized for</span>
            <span className="person-name">{currentUser.person.name}</span>
          </div>
          <button
            className="profile-view-btn"
            onClick={onViewProfile}
            title="View Profile"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
