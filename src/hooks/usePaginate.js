import { useState } from 'react';

export function usePaginate(sortedAndSearchedProducts, items) {
  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = sortedAndSearchedProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(sortedAndSearchedProducts.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return [currentItems, pageCount, handlePageClick];
}
