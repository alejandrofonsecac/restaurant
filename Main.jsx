import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CartProvider from "./src/_components/CartContext.jsx"; 

import App from "./src/App"; 
import Home from "./src/routes/Home.jsx";
import Cart from "./src/routes/Cart.jsx";
import Cardapio from "./src/routes/Cardapio.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: 'cardapio',
        element: <Cardapio/>
      },
      {
        path: "carrinho",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);