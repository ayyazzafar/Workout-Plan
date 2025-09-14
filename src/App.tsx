import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import WorkoutCard from "./components/WorkoutCard";
import Modal from "./components/Modal";
import SpecialSection from "./components/SpecialSection";
import InfoCard from "./components/InfoCard";
import EquipmentItem from "./components/EquipmentItem";
import DetailedPlan from "./components/DetailedPlan";
import PersonCard from "./components/PersonCard";
import { TabName, WorkoutDay } from "./types";
import { workouts, cardio, core, equipment, person } from "./data";

// Import styles
import "./styles/globals.css";
import "./styles/components.css";
import "./styles/exercises.css";
import "./styles/sections.css";
import "./styles/detailed.css";
import "./styles/modal.css";
import "./styles/person.css";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>("quick-ref");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalWorkout, setModalWorkout] = useState<WorkoutDay | null>(null);
  const [modalDayKey, setModalDayKey] = useState<string>("");
  const [activeExercises, setActiveExercises] = useState<Set<string>>(
    new Set()
  );
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [activeInfoCards, setActiveInfoCards] = useState<Set<string>>(
    new Set()
  );

  const handleTabChange = (tab: TabName) => {
    setActiveTab(tab);
  };

  const handleOpenModal = (dayKey: string, workout: WorkoutDay) => {
    setModalDayKey(dayKey);
    setModalWorkout(workout);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalWorkout(null);
    setModalDayKey("");
  };

  const handleExerciseToggle = (exerciseId: string) => {
    const newActiveExercises = new Set(activeExercises);
    if (newActiveExercises.has(exerciseId)) {
      newActiveExercises.delete(exerciseId);
    } else {
      newActiveExercises.add(exerciseId);
    }
    setActiveExercises(newActiveExercises);
  };

  const handleSectionToggle = (sectionId: string) => {
    const newExpandedSections = new Set(expandedSections);
    if (newExpandedSections.has(sectionId)) {
      newExpandedSections.delete(sectionId);
    } else {
      newExpandedSections.add(sectionId);
    }
    setExpandedSections(newExpandedSections);
  };

  const handleInfoCardToggle = (cardId: string) => {
    const newActiveInfoCards = new Set(activeInfoCards);
    if (newActiveInfoCards.has(cardId)) {
      newActiveInfoCards.delete(cardId);
    } else {
      newActiveInfoCards.add(cardId);
    }
    setActiveInfoCards(newActiveInfoCards);
  };

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ] as const;

  return (
    <div className="App">
      <Header />
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="container">
        {/* Quick Reference Tab */}
        <div
          id="quick-ref"
          className={`tab-content ${activeTab === "quick-ref" ? "active" : ""}`}
        >
          {/* Person Profile Card */}
          <PersonCard person={person} />

          <div className="workout-grid">
            {days.map((day) => (
              <WorkoutCard
                key={day}
                dayKey={day}
                workout={workouts[day]}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>

          {/* Cardio Section */}
          <SpecialSection
            id="cardioSection"
            title="Cardio Schedule"
            icon="🏃‍♂️"
            isExpanded={expandedSections.has("cardioSection")}
            onToggle={handleSectionToggle}
          >
            <div className="info-grid">
              {cardio.map((item, index) => (
                <InfoCard
                  key={index}
                  data={item}
                  index={index}
                  type="cardio"
                  isActive={activeInfoCards.has(`cardio-${index}`)}
                  onToggle={handleInfoCardToggle}
                />
              ))}
            </div>
          </SpecialSection>

          {/* Core Section */}
          <SpecialSection
            id="coreSection"
            title="Core Training Schedule"
            icon="🎯"
            isExpanded={expandedSections.has("coreSection")}
            onToggle={handleSectionToggle}
          >
            <div className="info-grid">
              {core.map((item, index) => (
                <InfoCard
                  key={index}
                  data={item}
                  index={index}
                  type="core"
                  isActive={activeInfoCards.has(`core-${index}`)}
                  onToggle={handleInfoCardToggle}
                />
              ))}
            </div>
          </SpecialSection>

          {/* Equipment Section */}
          <SpecialSection
            id="equipmentSection"
            title="Your Equipment"
            icon="🏋️‍♂️"
            isExpanded={expandedSections.has("equipmentSection")}
            onToggle={handleSectionToggle}
          >
            <div className="equipment-grid">
              {equipment.map((item, index) => (
                <EquipmentItem key={index} equipment={item} />
              ))}
            </div>
          </SpecialSection>
        </div>

        {/* Detailed Plan Tab */}
        <div
          id="detailed"
          className={`tab-content ${activeTab === "detailed" ? "active" : ""}`}
        >
          <DetailedPlan workouts={workouts} />
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        workout={modalWorkout}
        dayKey={modalDayKey}
        activeExercises={activeExercises}
        onExerciseToggle={handleExerciseToggle}
      />
    </div>
  );
};

export default App;
