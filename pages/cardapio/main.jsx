import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Carrinho from '../cart/Cart';

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

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);