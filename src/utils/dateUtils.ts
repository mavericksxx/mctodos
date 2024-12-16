import { Timestamp } from 'firebase/firestore';

export const formatDate = (timestamp: Timestamp | null | undefined): string => {
  if (!timestamp) return '';
  return timestamp.toDate().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};