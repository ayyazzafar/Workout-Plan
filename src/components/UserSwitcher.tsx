import React, { useState, useRef, useEffect } from "react";
import { UserProfile } from "../types";

interface UserSwitcherProps {
  users: UserProfile[];
  currentUserId: string;
  onUserChange: (userId: string) => void;
}

const UserSwitcher: React.FC<UserSwitcherProps> = ({
  users,
  currentUserId,
  onUserChange,
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
                {user.id === currentUserId && (
                  <svg
                    className="check-icon"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSwitcher;
