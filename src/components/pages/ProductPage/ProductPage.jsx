import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../../hooks';
import { Preloader } from '../../atoms';
import './ProductPage.scss';

export function ProductPage() {
  const params = useParams();
  const product = useProducts((state) => state.getProductById(params.id));
  console.log(product);
  return (
    <div>
      {product ? (
        <div className='product-page'>
          <div className='pp-image-container pp-container'>
            <img className='image' src={product.image} alt='...' />
          </div>
          <div className='pp-item-container'>
            <div className='pp-item-container__part pp-order pp-container'>
              <div className='pp-order__label'>
                <h2>
                  межккомнатная дверь {product.brand} {product.itemtype}
                </h2>
              </div>
            </div>
            <div className='pp-item-container__part pp-price pp-container'>
              <div className='pp-price__select'>
                <div className='pp-product-type-select'>
                  <form class='pp-product-type-select__form'>
                    <div class='pp-product-type-select__inputGroup'>
                      <input id='radio1' name='radio' type='radio' />
                      <label for='radio1'>Полотно {product.price}</label>
                    </div>
                    <div class='pp-product-type-select__inputGroup'>
                      <input id='radio2' name='radio' type='radio' />
                      <label for='radio2'>Комплект{Math.ceil(product.price * 1.6)}</label>
                    </div>
                  </form>
                </div>
              </div>
              <div className='pp-price__add-cart'></div>
            </div>
            <div className='pp-item-container__part pp-info pp-container'>
              <div>{product.brand}</div>
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
}
