import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeButton } from '../../atoms';
import './Footer.scss';
export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <ul className='footer__navigation'>
          <li>
            <NavLink className='footer__link link' to='/'>
              Каталог
            </NavLink>
          </li>
          <li>
            <NavLink className='footer__link link' to='/about'>
              О нас
            </NavLink>
          </li>
        </ul>
        <ul className='footer__navigation'>
          <li>
            <a className='footer__link link' href='tel: +375296270513'>
              +375 (29) 627-05-13
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
