import React from 'react'
import ReactDOM from 'react-dom/client'
import { store, persistor } from './redux/store'
import { Provider } from 'react-redux'
import App from './App'
import { ThemeProvider } from '@material-tailwind/react'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
