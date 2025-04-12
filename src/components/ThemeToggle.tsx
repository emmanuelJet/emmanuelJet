'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const root = document.documentElement;

    if (stored) {
      root.classList.remove('light', 'dark');
      root.classList.add(stored);
      setTheme(stored);
      applyTheme(stored);
    } else {
      root.classList.add('dark');
      applyTheme('dark');
    }

    setMounted(true);
  }, []);

  const applyTheme = (mode: 'light' | 'dark') => {
    const root = document.documentElement;

    if (mode === 'light') {
      root.style.setProperty('--color-bg', 'var(--color-bg-light)');
      root.style.setProperty('--color-text', 'var(--color-text-dark)');
    } else {
      root.style.setProperty('--color-bg', '#0e0e0e');
      root.style.setProperty('--color-text', '#f5f5f5');
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label='Toggle Theme'
      className={`
        rounded-full p-2 hover:scale-105 transition-transform}
      `}
    >
      {theme === 'dark' ? <MoonIcon />: <SunIcon />}
    </button>
  );
};

export default ThemeToggle;
