import {
  collection,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Task } from '../types/task';

export const deleteTask = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, 'tasks', id));
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};

export const toggleTaskComplete = async (task: Task): Promise<void> => {
  try {
    const taskRef = doc(db, 'tasks', task.id);
    await updateDoc(taskRef, {
      completed: !task.completed,
      completedAt: !task.completed ? Timestamp.now() : null,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};