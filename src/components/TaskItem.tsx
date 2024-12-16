import React from 'react';
import { Trash2, CheckCircle, XCircle } from 'lucide-react';
import { Task } from '../types';
import { getPriorityColor, formatDate } from '../utils';

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => Promise<void>;
  onToggleComplete: (task: Task) => Promise<void>;
}

export default function TaskItem({ task, onDelete, onToggleComplete }: TaskItemProps) {
  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await onDelete(task.id);
  };

  const handleToggle = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await onToggleComplete(task);
  };

  return (
    <li className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
      <span className={`flex-1 text-gray-900 dark:text-gray-100 ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
        {task.description}
      </span>
      <div className="flex items-center space-x-3">
        {!task.completed && (
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
        )}
        {task.completed && task.completedAt && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Completed: {formatDate(task.completedAt)}
          </span>
        )}
        <button
          onClick={handleToggle}
          className={`${
            task.completed 
              ? 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200' 
              : 'text-green-600 dark:text-green-500 hover:text-green-800 dark:hover:text-green-400'
          } transition-colors duration-200`}
          aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {task.completed ? (
            <XCircle className="w-5 h-5" />
          ) : (
            <CheckCircle className="w-5 h-5" />
          )}
        </button>
        <button
          onClick={handleDelete}
          className="text-red-600 dark:text-red-500 hover:text-red-800 dark:hover:text-red-400 transition-colors duration-200"
          aria-label="Delete task"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
}