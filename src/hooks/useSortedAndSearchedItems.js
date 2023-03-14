import { useMemo } from 'react';
import { productFeatues } from '../constants/productFeatues';

export const useSortedItems = (items, sort) => {
  const sortedItems = useMemo(() => {
    if (sort) {
      return [...items].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return items;
  }, [sort, items]);

  return sortedItems;
};

export const useSortedAndSearchedItems = (items, sort, query) => {
  const sortedItems = useSortedItems(items, sort);
  const sortedAndSearchedItems = useMemo(() => {
    return Array.from(
      new Set(
        productFeatues.reduce((acc, names) => {
          sortedItems.forEach((item) => {
            if (item[`${names.name}`].toLowerCase().includes(query.toLowerCase())) {
              acc.push(item);
            }
          });
          return acc;
        }, [])
      )
    );
  }, [query, sortedItems]);
  return sortedAndSearchedItems;
};
