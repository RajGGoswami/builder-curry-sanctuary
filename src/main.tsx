import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'   // adjust path if your App.tsx lives elsewhere
import './index.css'          // optional if you have global styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
