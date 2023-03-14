import React from 'react';

export function DsSelect({ options, defaultValue, value, onChange }) {
  return (
    <div>
      <select className='product-filter__select' value={value} onChange={(evt) => onChange(evt.target.value)}>
        <option disabled value='value1'>
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
