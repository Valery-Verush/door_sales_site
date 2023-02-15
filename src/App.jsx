import React, { useContext, useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './components';
import { Header, Preloader } from './components';

import { publicRoutes } from './constants/App-routes';
import { useGetProducts } from './hooks';

export const ProductContext = React.createContext();

export function App() {
  const routes = useRoutes(publicRoutes);
  const [products, setProducts] = useState([]);
  const [getProducts, isLoading, error] = useGetProducts(setProducts);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      {isLoading && <Preloader />}
      <h2>{error}</h2>
      <ProductContext.Provider value={{ products }}>
        <div products={products} className='page container'>
          {routes}
        </div>
      </ProductContext.Provider>
    </>
  );
}
