import React, { useState } from "react";
import { WorkoutPlan } from "../types";

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (data: WorkoutPlan) => void;
}

type ImportMode = "file" | "paste";

const ImportModal: React.FC<ImportModalProps> = ({
  isOpen,
  onClose,
  onImport,
}) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);
  const [importSuccess, setImportSuccess] = useState(false);
  const [importMode, setImportMode] = useState<ImportMode>("file");
  const [pastedText, setPastedText] = useState("");

  if (!isOpen) return null;

  const validateWorkoutPlan = (data: any): data is WorkoutPlan => {
    // Basic validation for WorkoutPlan structure
    if (!data || typeof data !== "object") return false;
    if (!data.metadata || typeof data.metadata !== "object") return false;
    if (!data.users || !Array.isArray(data.users)) return false;
    if (!data.currentUserId || typeof data.currentUserId !== "string")
      return false;

    // Validate users array has at least one user
    if (data.users.length === 0) return false;

    // Validate first user structure (basic check)
    const user = data.users[0];
    if (!user.id || !user.person || !user.workouts) return false;

    return true;
  };

  const handleFileInput = (file: File) => {
    if (!file) return;

    if (file.type !== "application/json" && !file.name.endsWith(".json")) {
      setImportError("Please select a valid JSON file.");
      setImportSuccess(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const parsedData = JSON.parse(content);

        if (!validateWorkoutPlan(parsedData)) {
          setImportError(
            "Invalid workout plan format. Please ensure the JSON file contains a valid workout plan structure."
          );
          setImportSuccess(false);
          return;
        }

        // Successfully parsed and validated
        setImportError(null);
        setImportSuccess(true);

        // Import the data after a short delay to show success message
        setTimeout(() => {
          onImport(parsedData);
          onClose();
          setImportSuccess(false);
        }, 1000);
      } catch (error) {
        setImportError(
          "Invalid JSON file. Please check the file format and try again."
        );
        setImportSuccess(false);
      }
    };

    reader.readAsText(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileInput(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileInput(files[0]);
    }
  };

  const handlePasteImport = () => {
    if (!pastedText.trim()) {
      setImportError("Please paste JSON content in the text area.");
      setImportSuccess(false);
      return;
    }

    try {
      const parsedData = JSON.parse(pastedText);

      if (!validateWorkoutPlan(parsedData)) {
        setImportError(
          "Invalid workout plan format. Please ensure the JSON contains a valid workout plan structure."
        );
        setImportSuccess(false);
        return;
      }

      // Successfully parsed and validated
      setImportError(null);
      setImportSuccess(true);

      // Import the data after a short delay to show success message
      setTimeout(() => {
        onImport(parsedData);
        onClose();
        setImportSuccess(false);
        setPastedText("");
      }, 1000);
    } catch (error) {
      setImportError(
        "Invalid JSON format. Please check your JSON syntax and try again."
      );
      setImportSuccess(false);
    }
  };

  const handleClose = () => {
    setImportError(null);
    setImportSuccess(false);
    setPastedText("");
    setImportMode("file");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-content import-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>📤 Import Workout Plan</h2>
          <button className="modal-close" onClick={handleClose}>
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

        <div className="import-content">
          <div className="import-instructions">
            <p>
              Import a JSON workout plan to replace your current data. This
              will:
            </p>
            <ul>
              <li>
                Replace all current workout data in memory and localStorage
              </li>
              <li>Update all user profiles with the imported data</li>
              <li>Switch to the first user in the imported data</li>
            </ul>
            <div className="warning-note">
              <strong>⚠️ Warning:</strong> This action cannot be undone.
              Consider exporting your current data first as a backup.
            </div>
          </div>

          <div className="import-mode-switcher">
            <button
              className={`mode-btn ${importMode === "file" ? "active" : ""}`}
              onClick={() => {
                setImportMode("file");
                setImportError(null);
                setPastedText("");
              }}
            >
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
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              Upload File
            </button>
            <button
              className={`mode-btn ${importMode === "paste" ? "active" : ""}`}
              onClick={() => {
                setImportMode("paste");
                setImportError(null);
              }}
            >
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
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              Paste JSON
            </button>
          </div>

          {importMode === "file" ? (
            <div
              className={`file-drop-zone ${isDragActive ? "drag-active" : ""} ${
                importSuccess ? "success" : ""
              } ${importError ? "error" : ""}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              {importSuccess ? (
                <div className="success-message">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="success-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3>Import Successful!</h3>
                  <p>Your workout plan has been updated successfully.</p>
                </div>
              ) : importError ? (
                <div className="error-message">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="error-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <h3>Import Error</h3>
                  <p>{importError}</p>
                  <button
                    className="retry-btn"
                    onClick={() => setImportError(null)}
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <div className="drop-content">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="upload-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <h3>Drop your JSON file here</h3>
                  <p>or</p>
                  <label className="file-select-btn">
                    <input
                      type="file"
                      accept=".json,application/json"
                      onChange={handleFileSelect}
                      style={{ display: "none" }}
                    />
                    Choose File
                  </label>
                </div>
              )}
            </div>
          ) : (
            <div
              className={`paste-zone ${importSuccess ? "success" : ""} ${
                importError ? "error" : ""
              }`}
            >
              {importSuccess ? (
                <div className="success-message">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="success-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3>Import Successful!</h3>
                  <p>Your workout plan has been updated successfully.</p>
                </div>
              ) : importError ? (
                <div className="error-message">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="error-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <h3>Import Error</h3>
                  <p>{importError}</p>
                  <button
                    className="retry-btn"
                    onClick={() => setImportError(null)}
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <div className="paste-content">
                  <div className="paste-header">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="paste-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <h3>Paste JSON Content</h3>
                  </div>
                  <textarea
                    className="json-textarea"
                    placeholder="Paste your workout plan JSON here..."
                    value={pastedText}
                    onChange={(e) => setPastedText(e.target.value)}
                    rows={10}
                  />
                  <button
                    className="import-paste-btn"
                    onClick={handlePasteImport}
                    disabled={!pastedText.trim()}
                  >
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
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    Import JSON
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="import-info">
            <h4>Import Information:</h4>
            <ul>
              <li>
                <strong>Format:</strong> JSON workout plans exported from this
                application
              </li>
              <li>
                <strong>Structure:</strong> Must contain metadata, users array,
                and currentUserId
              </li>
              <li>
                <strong>Validation:</strong> Content is automatically validated
                before import
              </li>
              {importMode === "paste" && (
                <li>
                  <strong>Paste Mode:</strong> Copy JSON content directly into
                  the text area
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportModal;
