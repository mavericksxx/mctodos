import React, { useState } from 'react';
import { CheckSquare } from 'lucide-react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import PageLayout from './components/layout/PageLayout';
import { useTasks } from './hooks';
import { filterTasksByPriority, filterCompletedTasks } from './utils';
import { deleteTask, toggleTaskComplete } from './services/taskService';

export default function App() {
  const { tasks, loading, error } = useTasks();
  const [openSections, setOpenSections] = useState({
    high: true,
    medium: true,
    low: true,
    completed: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (loading) {
    return (
      <PageLayout>
        <div className="text-center">Loading tasks...</div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <div className="text-center text-red-600">{error}</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="mb-8">
        <TaskForm />
      </div>

      <div className="space-y-6">
        <TaskList
          title="High Priority Tasks"
          tasks={filterTasksByPriority(tasks, 'high')}
          isOpen={openSections.high}
          onToggle={() => toggleSection('high')}
          onDelete={deleteTask}
          onToggleComplete={toggleTaskComplete}
        />
        <TaskList
          title="Medium Priority Tasks"
          tasks={filterTasksByPriority(tasks, 'medium')}
          isOpen={openSections.medium}
          onToggle={() => toggleSection('medium')}
          onDelete={deleteTask}
          onToggleComplete={toggleTaskComplete}
        />
        <TaskList
          title="Low Priority Tasks"
          tasks={filterTasksByPriority(tasks, 'low')}
          isOpen={openSections.low}
          onToggle={() => toggleSection('low')}
          onDelete={deleteTask}
          onToggleComplete={toggleTaskComplete}
        />
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex items-center justify-center mb-6">
            <CheckSquare className="w-8 h-8 text-green-600 dark:text-green-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Completed Tasks
            </h2>
          </div>
          <TaskList
            title="Completed Tasks"
            tasks={filterCompletedTasks(tasks)}
            isOpen={openSections.completed}
            onToggle={() => toggleSection('completed')}
            onDelete={deleteTask}
            onToggleComplete={toggleTaskComplete}
          />
        </div>
      </div>
    </PageLayout>
  );
}