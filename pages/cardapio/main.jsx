import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './src/App2';
import Carrinho from '../cart/Cart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path:'/carrinho',
    element: <Carrinho/>,
  }

])

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
