import { useEffect } from 'react';
import { useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import localStorageService from '../services/LocalStorage';

export function useTheme() {
  const [darkMode, setDarkMode] = useState(false);
  // const { switcher, currentTheme, status } = useThemeSwitcher();

  // const deviceTheme = window.getComputedStyle(document.body.parentElement).content;
  const checkCurrentTheme = () => {
    if (localStorageService.getItem('darkMode') === null) {
      localStorageService.setItem('darkMode', false);
    }
    setDarkMode(localStorageService.getItem('darkMode'));
  };
  const themeSwitch = () => {
    localStorageService.removeItem('darkMode');
    localStorageService.setItem('darkMode', !darkMode);
    setDarkMode(localStorageService.getItem('darkMode'));
  };
  useEffect(() => {
    checkCurrentTheme();
  }, []);
  return [darkMode, themeSwitch];
}
