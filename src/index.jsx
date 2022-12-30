import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import { routes } from './utils/routes/allRoutes';

const router = createBrowserRouter(routes)

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)