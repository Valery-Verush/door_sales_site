import React from 'react';
import './ProductCard.scss';

export function ProductCard({ data }) {
  return (
    <div className='product-card'>
      <img className='product-card__image' src={data.image} alt='door' />
      <div>{data.brand}</div>
    </div>
  );
}
