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
    if (users.length > 1) {
      // Prevent deleting last user
      onDeleteUser(userId);
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
            <h4>Switch Profile</h4>
          </div>
          <div className="user-list">
            {users.map((user) => (
              <button
                key={user.id}
                className={`user-item ${
                  user.id === currentUserId ? "active" : ""
                }`}
                onClick={() => handleUserSelect(user.id)}
              >
                <div className="user-avatar">
                  {user.person.name.charAt(0).toUpperCase()}
                </div>
                <div className="user-details">
                  <div className="user-name">{user.person.name}</div>
                  <div className="user-meta">
                    {user.person.age}y • {user.person.fitnessLevel}
                  </div>
                </div>
                <div className="user-actions">
                  {users.length > 1 && (
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
          <div className="user-dropdown-footer">
            <button className="add-user-btn" onClick={handleAddUser}>
              <svg
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add New Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSwitcher;
