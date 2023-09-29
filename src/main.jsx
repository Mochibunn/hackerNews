import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/system'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <NextUIProvider>
    <main className="light text-foreground bg-background">
      <App />
    </main>
  </NextUIProvider>
</React.StrictMode>,
)
