import React from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
            children: [
                {
                    path: 'cardapio',
                    element: <Cardapio/>
                },
                {
                    path: 'cart',
                    element: <Cart/>,
                }
            ]
    },
    {
        path: 'header',
        element: <Header/>
    }
])