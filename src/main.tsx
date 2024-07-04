import React from 'react'
import ReactDOM from 'react-dom/client'

import './Global.css'

import AppRoutes from './routes'
import { Chatbot } from './components/ChatbotPT'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
    <Chatbot />
  </React.StrictMode>,
)
