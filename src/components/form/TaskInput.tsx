import React from 'react';

interface TaskInputProps {
  description: string;
  onChange: (value: string) => void;
}

export default function TaskInput({ description, onChange }: TaskInputProps) {
  return (
    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Task Description
      </label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
        placeholder="Mine diamonds..."
      />
    </div>
  );
}