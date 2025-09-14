import React, { useEffect } from "react";
import { Person } from "../types";

interface PersonModalProps {
  isOpen: boolean;
  onClose: () => void;
  person: Person;
}

const PersonModal: React.FC<PersonModalProps> = ({
  isOpen,
  onClose,
  person,
}) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const formatHeight = () => {
    if (person.height.unit === "cm") {
      return `${person.height.value}cm`;
    }
    return `${person.height.value}${person.height.unit}`;
  };

  const formatWeight = () => {
    return `${person.weight.value}${person.weight.unit}`;
  };

  const getBMI = () => {
    let heightInMeters = person.height.value;
    let weightInKg = person.weight.value;

    // Convert height to meters if needed
    if (person.height.unit === "cm") {
      heightInMeters = person.height.value / 100;
    } else if (person.height.unit === "ft") {
      heightInMeters = person.height.value * 0.3048;
    } else if (person.height.unit === "in") {
      heightInMeters = person.height.value * 0.0254;
    }

    // Convert weight to kg if needed
    if (person.weight.unit === "lbs") {
      weightInKg = person.weight.value * 0.453592;
    }

    const bmi = weightInKg / (heightInMeters * heightInMeters);
    return bmi.toFixed(1);
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { text: "Underweight", color: "#F59E0B" };
    if (bmi < 25) return { text: "Normal", color: "#10B981" };
    if (bmi < 30) return { text: "Overweight", color: "#F59E0B" };
    return { text: "Obese", color: "#EF4444" };
  };

  const bmi = parseFloat(getBMI());
  const bmiCategory = getBMICategory(bmi);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>👤 Personal Profile</h2>
          <button className="modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="person-profile-modal">
            <div className="person-detail-grid">
              <div className="person-detail">
                <span className="detail-label">Name</span>
                <span className="detail-value">{person.name}</span>
              </div>
              
              <div className="person-detail">
                <span className="detail-label">Age</span>
                <span className="detail-value">{person.age} years</span>
              </div>
              
              <div className="person-detail">
                <span className="detail-label">Height</span>
                <span className="detail-value">{formatHeight()}</span>
              </div>
              
              <div className="person-detail">
                <span className="detail-label">Weight</span>
                <span className="detail-value">{formatWeight()}</span>
              </div>
              
              <div className="person-detail">
                <span className="detail-label">BMI</span>
                <span className="detail-value">
                  {getBMI()} 
                  <span className="bmi-category" style={{ color: bmiCategory.color }}>
                    ({bmiCategory.text})
                  </span>
                </span>
              </div>
              
              <div className="person-detail">
                <span className="detail-label">Level</span>
                <span className="detail-value">{person.fitnessLevel}</span>
              </div>
            </div>

            <div className="person-goals">
              <div className="goal-section">
                <h4>🎯 Primary Goal</h4>
                <p>{person.goal}</p>
              </div>
              
              <div className="goal-section">
                <h4>📈 Experience</h4>
                <p>{person.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonModal;
