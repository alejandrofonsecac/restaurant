import React from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import { StrictMode } from "react";

import App from './src/App.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
          {
            
          }
        ]
    },
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
