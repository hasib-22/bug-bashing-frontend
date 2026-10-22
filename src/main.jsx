import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import store from './store/store'
import { ThemeProvider } from './contexts/ThemeContext'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
        <Toaster position='top-right' richColors />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
