import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AddPage from './components/AddPage'
import EdithPage from './components/EdithPage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SearchPage from './components/SearchPage'

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
    path: '/searchPage',
    element: <SearchPage />,
  },
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)
