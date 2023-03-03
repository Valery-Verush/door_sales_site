import React, { useContext, useEffect, useState } from 'react';
import { ThemeSwitcherProvider, useThemeSwitcher } from 'react-css-theme-switcher';
import { useRoutes } from 'react-router-dom';
import './components';
import { Footer, Header, Preloader } from './components';

import { publicRoutes } from './constants/app-routes';
import { useGetProducts, useTheme } from './hooks';
import localStorageService from './services/LocalStorage';

export function App() {
  const routes = useRoutes(publicRoutes);
  const [products, setProducts] = useState([]);
  const [getProducts, isLoading, error] = useGetProducts(setProducts);

  const themes = {
    light: './theme/light.css',
    dark: './theme/dark.css',
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ThemeSwitcherProvider
        defaultTheme={localStorageService.getItem('darkMode')}
        insertionPoint='inject-styles-here'
        themeMap={themes}
      >
        <div className='app'>
          <Header />
          {isLoading && <Preloader />}
          <h2>{error}</h2>
          <div products={products} className='page container'>
            {routes}
          </div>
          <Footer />
        </div>
      </ThemeSwitcherProvider>
    </>
  );
}
