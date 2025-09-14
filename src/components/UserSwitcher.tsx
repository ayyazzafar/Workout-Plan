import React, { useState, useRef, useEffect } from "react";
import { UserProfile } from "../types";

interface UserSwitcherProps {
  users: UserProfile[];
  currentUserId: string;
  onUserChange: (userId: string) => void;
  onAddUser: () => void;
  onDeleteUser: (userId: string) => void;
}

const UserSwitcher: React.FC<UserSwitcherProps> = ({
  users,
  currentUserId,
  onUserChange,
  onAddUser,
  onDeleteUser,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentUser =
    users.find((user) => user.id === currentUserId) || users[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleUserSelect = (userId: string) => {
    onUserChange(userId);
    setIsOpen(false);
  };

  const handleAddUser = () => {
    onAddUser();
    setIsOpen(false);
  };

  const handleDeleteUser = (e: React.MouseEvent, userId: string) => {
    e.stopPropagation(); // Prevent triggering user select
    if (users.length > 1 && userId !== currentUserId) { 
      // Prevent deleting last user or current user
      const userToDelete = users.find(u => u.id === userId);
      if (window.confirm(`Are you sure you want to delete "${userToDelete?.person.name}"'s profile? This action cannot be undone.`)) {
        onDeleteUser(userId);
      }
    }
  };

  return (
    <div className="user-switcher" ref={dropdownRef}>
      <button
        className="user-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="Switch User Profile"
      >
        <div className="user-info">
          <div className="user-avatar">
            {currentUser.person.name.charAt(0).toUpperCase()}
          </div>
          <span className="user-name">{currentUser.person.name}</span>
        </div>
        <svg
          className={`chevron ${isOpen ? "rotated" : ""}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="user-dropdown">
          <div className="user-dropdown-header">
            <h4>
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
                  d="M17 20h5v-2a3 3 0 00-5.196-2.121M9 6a3 3 0 106 0 3 3 0 00-6 0zM13 18h-2a3 3 0 01-3-3v-1a3 3 0 013-3h2a3 3 0 013 3v1a3 3 0 01-3 3z"
                />
              </svg>
              Select Profile
            </h4>
          </div>
          
          <div className="current-user-section">
            <div className="section-label">Currently Active</div>
            <div className="current-user-card">
              <div className="user-avatar current">
                {currentUser.person.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-details">
                <div className="user-name">{currentUser.person.name}</div>
                <div className="user-status">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  </svg>
                  Active Now
                </div>
              </div>
            </div>
          </div>

          {users.filter(user => user.id !== currentUserId).length > 0 && (
            <div className="other-users-section">
              <div className="section-label">Switch To</div>
              <div className="user-list">
                {users
                  .filter(user => user.id !== currentUserId)
                  .map((user) => (
                  <button
                    key={user.id}
                    className="user-item switchable"
                    onClick={() => handleUserSelect(user.id)}
                  >
                    <div className="user-avatar">
                      {user.person.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="user-details">
                      <div className="user-name">{user.person.name}</div>
                      <div className="user-meta">{user.person.fitnessLevel}</div>
                    </div>
                    <div className="user-actions">
                      {users.length > 2 && (
                        <button
                          className="delete-user-btn"
                          onClick={(e) => handleDeleteUser(e, user.id)}
                          title="Delete Profile"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 6h18m-2 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="user-dropdown-footer">
            <button className="add-user-btn" onClick={handleAddUser}>
              <div className="add-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div className="add-text">
                <div className="add-title">Create New Profile</div>
                <div className="add-subtitle">Start a fresh workout plan</div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSwitcher;
