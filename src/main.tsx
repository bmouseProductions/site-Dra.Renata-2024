import React from 'react'
import ReactDOM from 'react-dom/client'
import './Global.css'

import ErrorPage from './pages/Error/ErrorPage'
import HomePage from './pages/Home/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>

    <Footer/>
  </React.StrictMode>,
)
