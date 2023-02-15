import React from 'react';
import { AboutPage, CartPage, HomePage } from '../components';

export const publicRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/cart', element: <CartPage /> },
];

// export const privateAdminRoutes = [...publicRoutes, { path: 'admin', element: <AdminPage /> }];
