import React from "react";
import { WorkoutPlan, UserProfile } from "../types";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  workoutPlan: WorkoutPlan;
  currentUser: UserProfile;
}

const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  workoutPlan,
  currentUser,
}) => {
  if (!isOpen) return null;

  const exportCurrentUser = () => {
    const userData = {
      metadata: workoutPlan.metadata,
      user: currentUser,
      exportType: "single-user",
      exportDate: new Date().toISOString(),
    };

    const dataStr = JSON.stringify(userData, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const fileName = `workout-plan-${currentUser.person.name
      .replace(/\s+/g, "-")
      .toLowerCase()}-${new Date().toISOString().split("T")[0]}.json`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", fileName);
    linkElement.click();

    onClose();
  };

  const exportAllUsers = () => {
    const allData = {
      ...workoutPlan,
      exportType: "all-users",
      exportDate: new Date().toISOString(),
    };

    const dataStr = JSON.stringify(allData, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
    const fileName = `workout-plan-all-users-${
      new Date().toISOString().split("T")[0]
    }.json`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", fileName);
    linkElement.click();

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content export-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>📥 Export Workout Plan</h2>
          <button className="modal-close" onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="export-options">
          <div className="export-option">
            <div className="option-header">
              <div className="option-icon">👤</div>
              <div className="option-info">
                <h3>Current User Only</h3>
                <p>
                  Export workout plan for{" "}
                  <strong>{currentUser.person.name}</strong>
                </p>
              </div>
            </div>
            <button className="btn-export-user" onClick={exportCurrentUser}>
              Export {currentUser.person.name}'s Plan
            </button>
          </div>

          <div className="export-option">
            <div className="option-header">
              <div className="option-icon">👥</div>
              <div className="option-info">
                <h3>All Users</h3>
                <p>
                  Export complete database with all {workoutPlan.users.length}{" "}
                  user profiles
                </p>
              </div>
            </div>
            <button className="btn-export-all" onClick={exportAllUsers}>
              Export All Profiles
            </button>
          </div>
        </div>

        <div className="export-info">
          <h4>Export Information:</h4>
          <ul>
            <li>
              <strong>Single User:</strong> Includes metadata and selected
              user's complete workout data
            </li>
            <li>
              <strong>All Users:</strong> Complete application backup with all
              profiles and settings
            </li>
            <li>
              <strong>Format:</strong> JSON files with timestamp for
              organization
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
