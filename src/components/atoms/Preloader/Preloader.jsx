import React from 'react';
import './Preloader.scss';
export function Preloader() {
  return (
    <div className='preloader'>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
