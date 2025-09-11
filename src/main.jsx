import { React, StrictMode} from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";

import App from './App.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)