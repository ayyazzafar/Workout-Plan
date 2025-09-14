import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import WorkoutCard from "./components/WorkoutCard";
import Modal from "./components/Modal";
import PersonModal from "./components/PersonModal";
import EditModal from "./components/EditModal";
import ExportModal from "./components/ExportModal";
import SpecialSection from "./components/SpecialSection";
import InfoCard from "./components/InfoCard";
import EquipmentItem from "./components/EquipmentItem";
import DetailedPlan from "./components/DetailedPlan";
import { TabName, WorkoutDay, UserProfile } from "./types";
import { workoutPlan as defaultWorkoutPlan } from "./data/workoutPlan";
import { getCurrentUser } from "./data";
import { useLocalStorage } from "./hooks/useLocalStorage";

// Import styles
import "./styles/globals.css";
import "./styles/components.css";
import "./styles/exercises.css";
import "./styles/sections.css";
import "./styles/detailed.css";
import "./styles/modal.css";
import "./styles/user-switcher.css";

const App: React.FC = () => {
  const {
    data: workoutPlan,
    updateData,
    resetData,
    isLoading,
  } = useLocalStorage(defaultWorkoutPlan);

  // Get current user data
  const currentUser = getCurrentUser(workoutPlan);

  const [activeTab, setActiveTab] = useState<TabName>("quick-ref");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalWorkout, setModalWorkout] = useState<WorkoutDay | null>(null);
  const [modalDayKey, setModalDayKey] = useState<string>("");
  const [isPersonModalOpen, setIsPersonModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
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

  const handleViewProfile = () => {
    setIsPersonModalOpen(true);
  };

  const handleClosePersonModal = () => {
    setIsPersonModalOpen(false);
  };

  const handleEditData = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSaveData = (newData: UserProfile) => {
    const updatedPlan = {
      ...workoutPlan,
      users: workoutPlan.users.map((user) =>
        user.id === workoutPlan.currentUserId ? newData : user
      ),
    };
    updateData(updatedPlan);
  };

  const handleResetData = () => {
    resetData();
  };

  const handleUserChange = (userId: string) => {
    const updatedPlan = {
      ...workoutPlan,
      currentUserId: userId,
    };
    updateData(updatedPlan);
  };

  const handleExportData = () => {
    setIsExportModalOpen(true);
  };

  const handleCloseExportModal = () => {
    setIsExportModalOpen(false);
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

  // Show loading state while data is being loaded
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading your workout plan...</div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header
        onViewProfile={handleViewProfile}
        onEditData={handleEditData}
        onExportData={handleExportData}
        users={workoutPlan.users}
        currentUserId={workoutPlan.currentUserId}
        currentUser={currentUser}
        onUserChange={handleUserChange}
      />
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="container">
        {/* Quick Reference Tab */}
        <div
          id="quick-ref"
          className={`tab-content ${activeTab === "quick-ref" ? "active" : ""}`}
        >
          <div className="workout-grid">
            {days.map((day) => (
              <WorkoutCard
                key={day}
                dayKey={day}
                workout={currentUser.workouts[day]}
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
              {currentUser.cardio.map((item, index) => (
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
              {currentUser.core.map((item, index) => (
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
              {currentUser.equipment.map((item, index) => (
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
          <DetailedPlan
            workouts={currentUser.workouts}
            tips={currentUser.tips}
            restDay={currentUser.restDay}
          />
        </div>
      </div>

      {/* Workout Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        workout={modalWorkout}
        dayKey={modalDayKey}
        activeExercises={activeExercises}
        onExerciseToggle={handleExerciseToggle}
      />

      {/* Person Profile Modal */}
      <PersonModal
        isOpen={isPersonModalOpen}
        onClose={handleClosePersonModal}
        person={currentUser.person}
      />

      {/* Edit Modal */}
      <EditModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        data={currentUser}
        onSave={handleSaveData}
        onReset={handleResetData}
      />

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={handleCloseExportModal}
        workoutPlan={workoutPlan}
        currentUser={currentUser}
      />
    </div>
  );
};

export default App;
