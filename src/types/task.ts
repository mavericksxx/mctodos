import { Timestamp } from 'firebase/firestore';

export interface Task {
  id: string;
  description: string;
  priority: string;
  completed?: boolean;
  completedAt?: Timestamp | null;
  timestamp: Timestamp;
}