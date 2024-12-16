import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Task } from '../types/task';
import TaskItem from './TaskItem';

interface TaskListProps {
  title: string;
  tasks: Task[];
  isOpen: boolean;
  onToggle: () => void;
  onDelete: (id: string) => Promise<void>;
  onToggleComplete: (task: Task) => Promise<void>;
}

export default function TaskList({
  title,
  tasks,
  isOpen,
  onToggle,
  onDelete,
  onToggleComplete,
}: TaskListProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title} {tasks.length > 0 && <span className="text-sm text-gray-500 dark:text-gray-400">({tasks.length})</span>}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        )}
      </button>
      {isOpen && (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggleComplete={onToggleComplete}
            />
          ))}
          {tasks.length === 0 && (
            <li className="p-4 text-gray-500 dark:text-gray-400 text-center">No tasks in this category</li>
          )}
        </ul>
      )}
    </div>
  );
}