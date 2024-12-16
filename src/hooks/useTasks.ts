import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Task } from '../types';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'tasks'), orderBy('timestamp', 'desc'));
    
    try {
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setTasks(snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Task[]);
        setLoading(false);
      }, (error) => {
        console.error('Error fetching tasks:', error);
        setError('Failed to load tasks');
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error('Error setting up tasks listener:', error);
      setError('Failed to initialize tasks');
      setLoading(false);
    }
  }, []);

  return { tasks, loading, error };
}