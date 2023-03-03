import React, { useState } from 'react';
import { productService } from '../services';
import { create } from 'zustand';
import { useProducts } from './useProducts';

export const useGetProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const getProducts = useProducts((state) => state.getProducts);

  const getItems = () => {
    setIsLoading(true);
    productService
      .getProducts()
      .then((data) => {
        getProducts(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return [getItems, isLoading, error];
};
