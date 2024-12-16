import React from 'react';
import ThemeToggle from '../ThemeToggle';
import MinecraftLogo from '../MinecraftLogo';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <MinecraftLogo />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            mncrft
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Made this to keep track of my minecraft projects :p
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}