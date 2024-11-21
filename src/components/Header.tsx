import React from 'react';
import { Shield, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">VRV Security</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Role-Based Access Control Dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              System Online
            </span>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};