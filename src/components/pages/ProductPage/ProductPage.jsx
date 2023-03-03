import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../../hooks';
import { Preloader } from '../../atoms';

export function ProductPage() {
  const params = useParams();
  const product = useProducts((state) => state.getProductById(params.id));

  return (
    <div>
      {product ? (
        <div>
          <div>{product.brand}</div>
          <img src={product.image} alt='...' />
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
}
