import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export function useTaskForm() {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const resetForm = () => {
    setDescription('');
    setPriority('low');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    // Reset form immediately after submission
    const taskDescription = description.trim();
    resetForm();

    try {
      await addDoc(collection(db, 'tasks'), {
        description: taskDescription,
        priority,
        completed: false,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error adding task:', error);
      // Optionally restore the form values if the operation fails
      setDescription(taskDescription);
      setPriority(priority);
    }
  };

  return {
    description,
    setDescription,
    priority,
    setPriority,
    handleSubmit,
  };
}