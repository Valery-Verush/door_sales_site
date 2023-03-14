import React from 'react';
import { productFeatues } from '../../../constants/productFeatues';
import { DsInput, DsSelect } from '../../atoms';
import './ProductFilter.scss';

export const ProductFilter = ({ filter, setFilter }) => {
  return (
    <div className='product-search-filter'>
      <DsInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder='search'
        className='product-search'
      />
      <DsSelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        defaultValue='sort'
        options={productFeatues.map((item) => ({ value: item.name, name: item.label }))}
        className='product-filter'
      />
    </div>
  );
};
