import React from 'react';

interface PrioritySelectProps {
  priority: string;
  onChange: (value: string) => void;
}

export default function PrioritySelect({ priority, onChange }: PrioritySelectProps) {
  return (
    <div>
      <label htmlFor="priority" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Priority
      </label>
      <select
        id="priority"
        value={priority}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-green-500 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
}