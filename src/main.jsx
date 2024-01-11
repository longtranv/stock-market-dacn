import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './App'
import { RouterProvider } from 'react-router-dom'
// import { store } from './store'
// import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
