import { Task } from '../types/task';

export const filterTasksByPriority = (tasks: Task[], priority: string): Task[] => {
  return tasks.filter((task) => task.priority === priority && !task.completed);
};

export const filterCompletedTasks = (tasks: Task[]): Task[] => {
  return tasks.filter((task) => task.completed);
};

export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};