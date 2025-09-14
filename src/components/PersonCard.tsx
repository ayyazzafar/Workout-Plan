import React, { useState } from "react";
import { Person } from "../types";

interface PersonCardProps {
  person: Person;
  className?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ person, className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
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

  return (
    <div className={`person-card ${isExpanded ? 'expanded' : ''} ${className}`}>
      <div className="person-card-header" onClick={handleToggle}>
        <h3>👤 Personal Profile</h3>
        <svg className="expand-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
      
      <div className="person-card-content">
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
              <span
                className="bmi-category"
                style={{ color: bmiCategory.color }}
              >
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
  );
};

export default PersonCard;
