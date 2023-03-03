import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as CartIcon } from './cart-icon.svg';
import { ThemeButton } from '../../atoms';

export function Header() {
  return (
    <header className='header'>
      <div className='header__container container'>
        <ul className='header__navigation'>
          <li>
            <NavLink className='header__link link' to='/'>
              Каталог
            </NavLink>
          </li>
          <li>
            <NavLink className='header__link link' to='/about'>
              О нас
            </NavLink>
          </li>
        </ul>
        <ul className='header__navigation'>
          <li>
            <ThemeButton className='footer__link link' />
          </li>
          <li>
            <a className='header__link link' href='tel: +375296270513'>
              +375 (29) 627-05-13
            </a>
          </li>
          <li>
            <NavLink className='header__link link' to='/cart'>
              <CartIcon className='header__cart-icon' />
              Корзина
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
