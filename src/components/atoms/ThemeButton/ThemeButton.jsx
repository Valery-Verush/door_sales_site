import React from 'react';
import { useState } from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import localStorageService from '../../../services/LocalStorage';
import './ThemeButton.scss';
import { ReactComponent as MoonIcon } from './moon-svgrepo.svg';
import { ReactComponent as SunIcon } from './sun-svgrepo.svg';
export function ThemeButton() {
  const { switcher, themes, currentTheme } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((previous) => {
      switcher({ theme: previous ? themes.light : themes.dark });
      localStorageService.removeItem('darkMode');
      localStorageService.setItem('darkMode', currentTheme === 'light' ? 'dark' : 'light');
      return !previous;
    });
  };
  return (
    <div onClick={toggleDarkMode} className='theme-button link'>
      {isDarkMode ? <MoonIcon /> : <SunIcon />}
    </div>
    // <label className='theme-button__switch'>
    //   <input onClick={toggleDarkMode} type='checkbox' readOnly checked={currentTheme === 'dark'} />
    //   <span className='theme-button__slider'></span>
    // </label>
  );
}
