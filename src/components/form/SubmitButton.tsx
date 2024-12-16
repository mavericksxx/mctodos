import React from 'react';
import { PlusCircle } from 'lucide-react';

export default function SubmitButton() {
  return (
    <button
      type="submit"
      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800"
    >
      <PlusCircle className="w-5 h-5 mr-2" />
      Add Task
    </button>
  );
}