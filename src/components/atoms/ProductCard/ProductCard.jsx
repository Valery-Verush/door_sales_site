import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.scss';

export function ProductCard({ data }) {
  const router = useNavigate();
  return (
    <div className='product-card' onClick={() => router(`/product/${data.id}`)}>
      <img className='product-card__image' src={data.image} alt='door' />
      <div className='product-card__descriptions'>
        <div className='product-card__description product-card__brand '>{data.brand}</div>
        <div className='product-card__line'></div>
        <div className='product-card__description product-card__price '>{data.price}р</div>
        {/* <button onClick={() => router(`/product/${data.id}`)}>Посмотреть товар</button> */}
      </div>
    </div>
  );
}
