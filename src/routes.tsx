import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import EspecialidadePage from './pages/Especialidade/EspecialidadePage'
import CelebrePage from './pages/Celebre/CelebrePage'
import ErrorPage from './pages/Error/ErrorPage'

import Footer from './components/Footer/Footer'
import BackToTop from './components/BackToTop/BackToTop'

export default function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/sobre" element={<AboutPage />}/>
                <Route path="/especialidade" element={<EspecialidadePage />}/>
                <Route path="/celebre" element={<CelebrePage />}/>
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer/>
            <BackToTop />
        </Router>
    )
}