import React from 'react';
import TaskInput from './form/TaskInput';
import PrioritySelect from './form/PrioritySelect';
import SubmitButton from './form/SubmitButton';
import { useTaskForm } from '../hooks/useTaskForm';

export default function TaskForm() {
  const {
    description,
    setDescription,
    priority,
    setPriority,
    handleSubmit,
  } = useTaskForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <TaskInput description={description} onChange={setDescription} />
      <PrioritySelect priority={priority} onChange={setPriority} />
      <SubmitButton />
    </form>
  );
}