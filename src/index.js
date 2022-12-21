import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AddPage from './components/AddPage'
import EdithPage from './components/EdithPage'
import SearchPage from './components/SearchPage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/addpage',
    element: <AddPage />,
  },

  {
    path: '/edithpage/:id',
    element: <EdithPage />,
  },
  {
    path: '/searchpage',
    element: <SearchPage />,
  },
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)