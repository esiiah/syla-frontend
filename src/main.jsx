import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import './App.css'
import { register } from './serviceWorkerRegistration'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  register()
}
