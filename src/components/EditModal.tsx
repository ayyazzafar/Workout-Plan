import React, { useState, useEffect } from "react";
import { WorkoutPlan } from "../types";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: WorkoutPlan;
  onSave: (newData: WorkoutPlan) => void;
  onReset: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<WorkoutPlan>(data);
  const [activeTab, setActiveTab] = useState<
    | "person"
    | "metadata"
    | "workouts"
    | "cardio"
    | "core"
    | "equipment"
    | "tips"
    | "restday"
  >("person");
  const [expandedWorkoutSections, setExpandedWorkoutSections] = useState<
    Set<string>
  >(
    new Set(["monday"]) // Only Monday expanded by default
  );

  useEffect(() => {
    setFormData(data);
  }, [data]);

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

  const handlePersonChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      person: {
        ...prev.person,
        [field]: value,
      },
    }));
  };

  const handleHeightChange = (field: "value" | "unit", value: any) => {
    setFormData((prev) => ({
      ...prev,
      person: {
        ...prev.person,
        height: {
          ...prev.person.height,
          [field]: value,
        },
      },
    }));
  };

  const handleWeightChange = (field: "value" | "unit", value: any) => {
    setFormData((prev) => ({
      ...prev,
      person: {
        ...prev.person,
        weight: {
          ...prev.person.weight,
          [field]: value,
        },
      },
    }));
  };

  const handleMetadataChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      metadata: {
        ...prev.metadata,
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all data to default? This cannot be undone."
      )
    ) {
      onReset();
      onClose();
    }
  };

  const handleWorkoutSectionToggle = (dayKey: string) => {
    const newExpanded = new Set(expandedWorkoutSections);
    if (newExpanded.has(dayKey)) {
      newExpanded.delete(dayKey);
    } else {
      newExpanded.add(dayKey);
    }
    setExpandedWorkoutSections(newExpanded);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content edit-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>✏️ Edit Workout Plan</h2>
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

        <div className="edit-modal-nav">
          <button
            className={`edit-tab ${activeTab === "person" ? "active" : ""}`}
            onClick={() => setActiveTab("person")}
          >
            👤 Personal
          </button>
          <button
            className={`edit-tab ${activeTab === "metadata" ? "active" : ""}`}
            onClick={() => setActiveTab("metadata")}
          >
            📝 App Info
          </button>
          <button
            className={`edit-tab ${activeTab === "workouts" ? "active" : ""}`}
            onClick={() => setActiveTab("workouts")}
          >
            💪 Workouts
          </button>
          <button
            className={`edit-tab ${activeTab === "cardio" ? "active" : ""}`}
            onClick={() => setActiveTab("cardio")}
          >
            🏃‍♂️ Cardio
          </button>
          <button
            className={`edit-tab ${activeTab === "core" ? "active" : ""}`}
            onClick={() => setActiveTab("core")}
          >
            🎯 Core
          </button>
          <button
            className={`edit-tab ${activeTab === "equipment" ? "active" : ""}`}
            onClick={() => setActiveTab("equipment")}
          >
            🏋️‍♂️ Equipment
          </button>
          <button
            className={`edit-tab ${activeTab === "tips" ? "active" : ""}`}
            onClick={() => setActiveTab("tips")}
          >
            💡 Tips
          </button>
          <button
            className={`edit-tab ${activeTab === "restday" ? "active" : ""}`}
            onClick={() => setActiveTab("restday")}
          >
            😴 Rest Day
          </button>
        </div>

        <div className="modal-body">
          {activeTab === "person" && (
            <div className="edit-section">
              <h3>Personal Information</h3>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.person.name}
                    onChange={(e) => handlePersonChange("name", e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    id="age"
                    value={formData.person.age}
                    onChange={(e) =>
                      handlePersonChange("age", parseInt(e.target.value))
                    }
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="height">Height</label>
                  <div className="input-group">
                    <input
                      type="number"
                      value={formData.person.height.value}
                      onChange={(e) =>
                        handleHeightChange("value", parseFloat(e.target.value))
                      }
                    />
                    <select
                      value={formData.person.height.unit}
                      onChange={(e) =>
                        handleHeightChange(
                          "unit",
                          e.target.value as "cm" | "ft" | "in"
                        )
                      }
                    >
                      <option value="cm">cm</option>
                      <option value="ft">ft</option>
                      <option value="in">in</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="weight">Weight</label>
                  <div className="input-group">
                    <input
                      type="number"
                      value={formData.person.weight.value}
                      onChange={(e) =>
                        handleWeightChange("value", parseFloat(e.target.value))
                      }
                    />
                    <select
                      value={formData.person.weight.unit}
                      onChange={(e) =>
                        handleWeightChange(
                          "unit",
                          e.target.value as "kg" | "lbs"
                        )
                      }
                    >
                      <option value="kg">kg</option>
                      <option value="lbs">lbs</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="fitnessLevel">Fitness Level</label>
                  <select
                    id="fitnessLevel"
                    value={formData.person.fitnessLevel}
                    onChange={(e) =>
                      handlePersonChange("fitnessLevel", e.target.value)
                    }
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="goal">Primary Goal</label>
                  <textarea
                    id="goal"
                    value={formData.person.goal}
                    onChange={(e) => handlePersonChange("goal", e.target.value)}
                    rows={2}
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="experience">Experience</label>
                  <textarea
                    id="experience"
                    value={formData.person.experience}
                    onChange={(e) =>
                      handlePersonChange("experience", e.target.value)
                    }
                    rows={2}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "metadata" && (
            <div className="edit-section">
              <h3>App Information</h3>

              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="title">App Title</label>
                  <input
                    type="text"
                    id="title"
                    value={formData.metadata.title}
                    onChange={(e) =>
                      handleMetadataChange("title", e.target.value)
                    }
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="subtitle">Subtitle</label>
                  <textarea
                    id="subtitle"
                    value={formData.metadata.subtitle}
                    onChange={(e) =>
                      handleMetadataChange("subtitle", e.target.value)
                    }
                    rows={2}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="version">Version</label>
                  <input
                    type="text"
                    id="version"
                    value={formData.metadata.version}
                    onChange={(e) =>
                      handleMetadataChange("version", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          )}

          {/* REST OF TABS WOULD GO HERE - SIMPLIFIED FOR NOW */}
          {activeTab === "workouts" && (
            <div className="edit-section">
              <h3>Workout Schedule</h3>
              <p className="section-note">
                Edit all workout details for each day - Click headers to
                expand/collapse
              </p>

              <div className="workout-detailed-edit">
                {Object.entries(formData.workouts).map(([dayKey, workout]) => (
                  <div
                    key={dayKey}
                    className={`workout-day-editor ${
                      expandedWorkoutSections.has(dayKey)
                        ? "expanded"
                        : "collapsed"
                    }`}
                  >
                    <div
                      className="workout-day-header clickable-header"
                      onClick={() => handleWorkoutSectionToggle(dayKey)}
                    >
                      <h4>{workout.day} Workout</h4>
                      <div className="workout-section-controls">
                        <span className="exercise-count-badge">
                          {workout.exercises.length} exercises
                        </span>
                        <svg
                          className={`expand-chevron ${
                            expandedWorkoutSections.has(dayKey) ? "rotated" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="workout-collapsible-content">
                      <div className="workout-basic-info">
                        <div className="form-grid">
                          <div className="form-group">
                            <label>Day</label>
                            <input
                              type="text"
                              value={workout.day || ""}
                              onChange={(e) => {
                                setFormData((prev) => ({
                                  ...prev,
                                  workouts: {
                                    ...prev.workouts,
                                    [dayKey]: {
                                      ...prev.workouts[
                                        dayKey as keyof typeof prev.workouts
                                      ],
                                      day: e.target.value,
                                    },
                                  },
                                }));
                              }}
                            />
                          </div>

                          <div className="form-group">
                            <label>Type</label>
                            <select
                              value={workout.type || ""}
                              onChange={(e) => {
                                setFormData((prev) => ({
                                  ...prev,
                                  workouts: {
                                    ...prev.workouts,
                                    [dayKey]: {
                                      ...prev.workouts[
                                        dayKey as keyof typeof prev.workouts
                                      ],
                                      type: e.target.value,
                                    },
                                  },
                                }));
                              }}
                            >
                              <option value="Push">Push</option>
                              <option value="Pull">Pull</option>
                              <option value="Legs">Legs</option>
                              <option value="Upper Body">Upper Body</option>
                              <option value="Lower Body">Lower Body</option>
                              <option value="Full Body">Full Body</option>
                            </select>
                          </div>

                          <div className="form-group full-width">
                            <label>Focus</label>
                            <input
                              type="text"
                              value={workout.focus || ""}
                              onChange={(e) => {
                                setFormData((prev) => ({
                                  ...prev,
                                  workouts: {
                                    ...prev.workouts,
                                    [dayKey]: {
                                      ...prev.workouts[
                                        dayKey as keyof typeof prev.workouts
                                      ],
                                      focus: e.target.value,
                                    },
                                  },
                                }));
                              }}
                            />
                          </div>

                          <div className="form-group full-width">
                            <label>Warm-up</label>
                            <textarea
                              value={workout.warmup || ""}
                              onChange={(e) => {
                                setFormData((prev) => ({
                                  ...prev,
                                  workouts: {
                                    ...prev.workouts,
                                    [dayKey]: {
                                      ...prev.workouts[
                                        dayKey as keyof typeof prev.workouts
                                      ],
                                      warmup: e.target.value,
                                    },
                                  },
                                }));
                              }}
                              rows={2}
                            />
                          </div>

                          <div className="form-group full-width">
                            <label>Cool-down</label>
                            <textarea
                              value={workout.cooldown || ""}
                              onChange={(e) => {
                                setFormData((prev) => ({
                                  ...prev,
                                  workouts: {
                                    ...prev.workouts,
                                    [dayKey]: {
                                      ...prev.workouts[
                                        dayKey as keyof typeof prev.workouts
                                      ],
                                      cooldown: e.target.value,
                                    },
                                  },
                                }));
                              }}
                              rows={2}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="exercises-section">
                        <div className="exercises-header">
                          <h5>Exercises ({workout.exercises.length})</h5>
                          <button
                            type="button"
                            className="btn-add-exercise"
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                workouts: {
                                  ...prev.workouts,
                                  [dayKey]: {
                                    ...prev.workouts[
                                      dayKey as keyof typeof prev.workouts
                                    ],
                                    exercises: [
                                      ...prev.workouts[
                                        dayKey as keyof typeof prev.workouts
                                      ].exercises,
                                      {
                                        name: "New Exercise",
                                        sets: "3 sets",
                                        details: ["Exercise details"],
                                      },
                                    ],
                                  },
                                },
                              }));
                            }}
                          >
                            + Add Exercise
                          </button>
                        </div>

                        <div className="exercises-list">
                          {workout.exercises.map((exercise, exerciseIndex) => (
                            <div
                              key={exerciseIndex}
                              className="exercise-editor"
                            >
                              <div className="exercise-header">
                                <h6>Exercise {exerciseIndex + 1}</h6>
                                <button
                                  type="button"
                                  className="btn-remove-exercise"
                                  onClick={() => {
                                    setFormData((prev) => ({
                                      ...prev,
                                      workouts: {
                                        ...prev.workouts,
                                        [dayKey]: {
                                          ...prev.workouts[
                                            dayKey as keyof typeof prev.workouts
                                          ],
                                          exercises: prev.workouts[
                                            dayKey as keyof typeof prev.workouts
                                          ].exercises.filter(
                                            (_, i) => i !== exerciseIndex
                                          ),
                                        },
                                      },
                                    }));
                                  }}
                                >
                                  ✕
                                </button>
                              </div>

                              <div className="exercise-form">
                                <div className="form-group">
                                  <label>Exercise Name</label>
                                  <input
                                    type="text"
                                    value={exercise.name || ""}
                                    onChange={(e) => {
                                      setFormData((prev) => {
                                        const newWorkouts = {
                                          ...prev.workouts,
                                        };
                                        const workoutDay =
                                          newWorkouts[
                                            dayKey as keyof typeof newWorkouts
                                          ];
                                        const newExercises = [
                                          ...workoutDay.exercises,
                                        ];
                                        newExercises[exerciseIndex] = {
                                          ...newExercises[exerciseIndex],
                                          name: e.target.value,
                                        };
                                        newWorkouts[
                                          dayKey as keyof typeof newWorkouts
                                        ] = {
                                          ...workoutDay,
                                          exercises: newExercises,
                                        };

                                        return {
                                          ...prev,
                                          workouts: newWorkouts,
                                        };
                                      });
                                    }}
                                  />
                                </div>

                                <div className="form-group">
                                  <label>Sets</label>
                                  <input
                                    type="text"
                                    value={exercise.sets || ""}
                                    onChange={(e) => {
                                      setFormData((prev) => {
                                        const newWorkouts = {
                                          ...prev.workouts,
                                        };
                                        const workoutDay =
                                          newWorkouts[
                                            dayKey as keyof typeof newWorkouts
                                          ];
                                        const newExercises = [
                                          ...workoutDay.exercises,
                                        ];
                                        newExercises[exerciseIndex] = {
                                          ...newExercises[exerciseIndex],
                                          sets: e.target.value,
                                        };
                                        newWorkouts[
                                          dayKey as keyof typeof newWorkouts
                                        ] = {
                                          ...workoutDay,
                                          exercises: newExercises,
                                        };

                                        return {
                                          ...prev,
                                          workouts: newWorkouts,
                                        };
                                      });
                                    }}
                                  />
                                </div>

                                <div className="form-group full-width">
                                  <label>Exercise Details</label>
                                  <textarea
                                    value={(exercise.details || []).join("\n")}
                                    onChange={(e) => {
                                      setFormData((prev) => {
                                        const newWorkouts = {
                                          ...prev.workouts,
                                        };
                                        const workoutDay =
                                          newWorkouts[
                                            dayKey as keyof typeof newWorkouts
                                          ];
                                        const newExercises = [
                                          ...workoutDay.exercises,
                                        ];
                                        newExercises[exerciseIndex] = {
                                          ...newExercises[exerciseIndex],
                                          details: e.target.value
                                            .split("\n")
                                            .filter((d) => d.trim()),
                                        };
                                        newWorkouts[
                                          dayKey as keyof typeof newWorkouts
                                        ] = {
                                          ...workoutDay,
                                          exercises: newExercises,
                                        };

                                        return {
                                          ...prev,
                                          workouts: newWorkouts,
                                        };
                                      });
                                    }}
                                    placeholder="One detail per line"
                                    rows={3}
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "cardio" && (
            <div className="edit-section">
              <h3>Cardio Schedule</h3>

              <div className="cardio-edit-list">
                {formData.cardio.map((item, index) => (
                  <div key={index} className="edit-item-card">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        value={item.name || ""}
                        onChange={(e) => {
                          const newCardio = [...formData.cardio];
                          newCardio[index] = {
                            ...newCardio[index],
                            name: e.target.value,
                          };
                          setFormData((prev) => ({
                            ...prev,
                            cardio: newCardio,
                          }));
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label>Schedule</label>
                      <input
                        type="text"
                        value={item.schedule || ""}
                        onChange={(e) => {
                          const newCardio = [...formData.cardio];
                          newCardio[index] = {
                            ...newCardio[index],
                            schedule: e.target.value,
                          };
                          setFormData((prev) => ({
                            ...prev,
                            cardio: newCardio,
                          }));
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label>Duration</label>
                      <input
                        type="text"
                        value={item.duration || ""}
                        onChange={(e) => {
                          const newCardio = [...formData.cardio];
                          newCardio[index] = {
                            ...newCardio[index],
                            duration: e.target.value,
                          };
                          setFormData((prev) => ({
                            ...prev,
                            cardio: newCardio,
                          }));
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label>Equipment</label>
                      <input
                        type="text"
                        value={item.equipment || ""}
                        onChange={(e) => {
                          const newCardio = [...formData.cardio];
                          newCardio[index] = {
                            ...newCardio[index],
                            equipment: e.target.value,
                          };
                          setFormData((prev) => ({
                            ...prev,
                            cardio: newCardio,
                          }));
                        }}
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Details</label>
                      <textarea
                        value={(item.details || []).join("\n")}
                        onChange={(e) => {
                          const newCardio = [...formData.cardio];
                          newCardio[index] = {
                            ...newCardio[index],
                            details: e.target.value
                              .split("\n")
                              .filter((d) => d.trim()),
                          };
                          setFormData((prev) => ({
                            ...prev,
                            cardio: newCardio,
                          }));
                        }}
                        placeholder="One detail per line"
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "core" && (
            <div className="edit-section">
              <h3>Core Training Schedule</h3>

              <div className="core-edit-list">
                {formData.core.map((item, index) => (
                  <div key={index} className="edit-item-card">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        value={item.name || ""}
                        onChange={(e) => {
                          const newCore = [...formData.core];
                          newCore[index] = {
                            ...newCore[index],
                            name: e.target.value,
                          };
                          setFormData((prev) => ({ ...prev, core: newCore }));
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label>Schedule</label>
                      <input
                        type="text"
                        value={item.schedule || ""}
                        onChange={(e) => {
                          const newCore = [...formData.core];
                          newCore[index] = {
                            ...newCore[index],
                            schedule: e.target.value,
                          };
                          setFormData((prev) => ({ ...prev, core: newCore }));
                        }}
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Description</label>
                      <textarea
                        value={item.description || ""}
                        onChange={(e) => {
                          const newCore = [...formData.core];
                          newCore[index] = {
                            ...newCore[index],
                            description: e.target.value,
                          };
                          setFormData((prev) => ({ ...prev, core: newCore }));
                        }}
                        placeholder="Core exercise description"
                        rows={2}
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Details</label>
                      <textarea
                        value={(item.details || []).join("\n")}
                        onChange={(e) => {
                          const newCore = [...formData.core];
                          newCore[index] = {
                            ...newCore[index],
                            details: e.target.value
                              .split("\n")
                              .filter((d) => d.trim()),
                          };
                          setFormData((prev) => ({ ...prev, core: newCore }));
                        }}
                        placeholder="One detail per line"
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "equipment" && (
            <div className="edit-section">
              <h3>Your Equipment</h3>

              <div className="equipment-edit-list">
                {formData.equipment.map((item, index) => (
                  <div key={index} className="edit-item-card">
                    <div className="form-group">
                      <label>Equipment Name</label>
                      <input
                        type="text"
                        value={item.name || ""}
                        onChange={(e) => {
                          const newEquipment = [...formData.equipment];
                          newEquipment[index] = {
                            ...newEquipment[index],
                            name: e.target.value,
                          };
                          setFormData((prev) => ({
                            ...prev,
                            equipment: newEquipment,
                          }));
                        }}
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Tooltip/Description</label>
                      <textarea
                        value={item.tooltip || ""}
                        onChange={(e) => {
                          const newEquipment = [...formData.equipment];
                          newEquipment[index] = {
                            ...newEquipment[index],
                            tooltip: e.target.value,
                          };
                          setFormData((prev) => ({
                            ...prev,
                            equipment: newEquipment,
                          }));
                        }}
                        placeholder="Brief description or tooltip text"
                        rows={2}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "tips" && (
            <div className="edit-section">
              <h3>Pro Tips for Maximum Gains</h3>

              <div className="tips-edit-list">
                {Object.entries(formData.tips).map(([tipKey, tip]) => (
                  <div key={tipKey} className="edit-item-card">
                    <div className="form-group full-width">
                      <label>
                        {tipKey.charAt(0).toUpperCase() + tipKey.slice(1)} Title
                      </label>
                      <input
                        type="text"
                        value={tip.title || ""}
                        onChange={(e) => {
                          setFormData((prev) => ({
                            ...prev,
                            tips: {
                              ...prev.tips,
                              [tipKey]: {
                                ...prev.tips[tipKey as keyof typeof prev.tips],
                                title: e.target.value,
                              },
                            },
                          }));
                        }}
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Points</label>
                      <textarea
                        value={(tip.points || []).join("\n")}
                        onChange={(e) => {
                          setFormData((prev) => ({
                            ...prev,
                            tips: {
                              ...prev.tips,
                              [tipKey]: {
                                ...prev.tips[tipKey as keyof typeof prev.tips],
                                points: e.target.value
                                  .split("\n")
                                  .filter((p) => p.trim()),
                              },
                            },
                          }));
                        }}
                        placeholder="One point per line"
                        rows={4}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "restday" && (
            <div className="edit-section">
              <h3>Rest Day Activities</h3>

              <div className="form-grid">
                <div className="form-group">
                  <label>Day</label>
                  <input
                    type="text"
                    value={formData.restDay.day || ""}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        restDay: { ...prev.restDay, day: e.target.value },
                      }));
                    }}
                  />
                </div>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={formData.restDay.title || ""}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        restDay: { ...prev.restDay, title: e.target.value },
                      }));
                    }}
                  />
                </div>
                <div className="form-group full-width">
                  <label>Options</label>
                  <textarea
                    value={(formData.restDay.options || []).join("\n")}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        restDay: {
                          ...prev.restDay,
                          options: e.target.value
                            .split("\n")
                            .filter((o) => o.trim()),
                        },
                      }));
                    }}
                    placeholder="One option per line"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <div className="modal-actions-left">
            <button className="btn-reset" onClick={handleReset}>
              🔄 Reset to Default
            </button>
          </div>
          <div className="modal-actions-right">
            <button className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button className="btn-primary" onClick={handleSave}>
              💾 Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
