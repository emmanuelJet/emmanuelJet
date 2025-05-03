'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';

type Theme = 'light' | 'dark';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const root = document.documentElement;
    let initialTheme: Theme;

    if (storedTheme) {
      initialTheme = storedTheme;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      initialTheme = 'dark';
    } else {
      initialTheme = 'light';
    }

    root.classList.remove('light', 'dark');
    root.classList.add(initialTheme);
    setTheme(initialTheme);

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label='Toggle Theme'
      className='rounded-full p-2 hover:scale-105 transition-transform'
    >
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggle;
