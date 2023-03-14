import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { usePaginate, useSortedAndSearchedItems } from '../../../hooks';
import { useProducts } from '../../../hooks/useProducts';
import { DsInput, DsSelect, ProductCard } from '../../atoms';
import { ProductFilter } from '../../molecules';

import './HomePage.scss';

export function HomePage() {
  const [items, setItems] = useState([]);
  const products = useProducts((state) => state.products);
  useEffect(() => {
    setItems(products);
  }, [products]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearchedProducts = useSortedAndSearchedItems(products, filter.sort, filter.query);

  const [currentItems, pageCount, handlePageClick] = usePaginate(sortedAndSearchedProducts, items);

  return (
    <div className='catalog'>
      <div className='catalog-heading'>
        <h1 className='catalog-heading__label'>Каталог</h1>
        <ProductFilter filter={filter} setFilter={setFilter} />
      </div>
      <div className='product-cards-grid'>
        {currentItems && currentItems.map((item) => <ProductCard key={item.id} data={item} alt='' />)}
      </div>
      <ReactPaginate
        marginPagesDisplayed={1}
        className='paginator'
        breakLabel='...'
        nextLabel='>'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel='<'
        renderOnZeroPageCount={null}
        pageClassName='paginator__numbers'
        breakLinkClassName='paginator__dots'
        breakClassName='paginator__dots'
        previousClassName='paginator__btn'
        nextClassName='paginator__btn'
      />
    </div>
  );
}
