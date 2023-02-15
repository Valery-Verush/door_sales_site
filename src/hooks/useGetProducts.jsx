import React, { useState } from 'react';
import { productService } from '../services';

export const useGetProducts = (func) => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const getItems = () => {
    setIsLoading(true);
    productService
      .getProducts()
      .then((data) => {
        func(data);
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
