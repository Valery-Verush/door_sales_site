import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useProducts } from '../../../hooks/useProducts';
import { ProductCard } from '../../atoms';

import './HomePage.scss';

export function HomePage() {
  const [items, setItems] = useState([]);
  const products = useProducts((state) => state.products);
  useEffect(() => {
    setItems(products);
  }, [products]);

  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className='catalog'>
      <div className='catalog-heading'>
        <h1 className='catalog-heading__label'>Каталог</h1>
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
