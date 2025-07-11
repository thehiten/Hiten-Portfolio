import React, { createContext, useContext, useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check for saved theme in localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme) => {
    // Apply theme to document element
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Apply theme classes to body
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(newTheme);
    
    // Apply theme to html element as well
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    
    // Set CSS custom properties on document root
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.style.setProperty('--bg-body', '#111827');
      root.style.setProperty('--text-body', '#f9fafb');
    } else {
      root.style.setProperty('--bg-body', '#ffffff');
      root.style.setProperty('--text-body', '#1f2937');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      <ThemeToggle />
    </ThemeContext.Provider>
  );
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle fixed top-6 right-6 z-[9999] p-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FiMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      ) : (
        <FiSun className="w-5 h-5 text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeProvider; 