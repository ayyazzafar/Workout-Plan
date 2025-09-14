import { useState, useEffect } from 'react';
import { WorkoutPlan } from '../types';

const LOCAL_STORAGE_KEY = 'workoutPlan';

export const useLocalStorage = (defaultData: WorkoutPlan) => {
  const [data, setData] = useState<WorkoutPlan>(defaultData);
  const [isLoading, setIsLoading] = useState(true);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setData(parsedData);
      } else {
        // First time - save default data to localStorage
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultData));
        setData(defaultData);
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      setData(defaultData);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save data to localStorage whenever data changes
  const updateData = (newData: WorkoutPlan) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
      setData(newData);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  // Reset to default data
  const resetData = () => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultData));
      setData(defaultData);
    } catch (error) {
      console.error('Error resetting data:', error);
    }
  };

  return { data, updateData, resetData, isLoading };
};
