import React from 'react';
import { AboutPage, CartPage, HomePage, ProductPage } from '../components';

export const publicRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/page:id', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/product/:id', element: <ProductPage /> },
  { path: '/cart', element: <CartPage /> },
];

// export const privateAdminRoutes = [...publicRoutes, { path: 'admin', element: <AdminPage /> }];
