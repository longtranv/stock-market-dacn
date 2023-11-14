import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Trade from './pages/Trade.jsx';
import Orders from './pages/Orders.jsx';
import Wallet from './pages/Wallet.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: '/trade/:stock',
    element: <Trade/>
  },
  {
    path: '/order',
    element: <Orders/>
  },
  {
    path: '/wallet',
    element: <Wallet/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
