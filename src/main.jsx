import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './App'
import { RouterProvider } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import App from './App'
import { ThemeProvider } from '@material-tailwind/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
