import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../App';
import { ProductCard } from '../../atoms';
import './HomePage.scss';

export function HomePage() {
  const { products } = useContext(ProductContext);

  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(products);
  }, [products]);
  return (
    <div className=''>
      <h1>Каталог</h1>

      <div className='product-cards-grid'>
        {items.map((item) => (
          <ProductCard key={item.id} data={item} alt='' />
        ))}
      </div>
    </div>
  );
}
