import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/ Navbar';
import Footer from './components/ Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio'
import 'animate.css';


const App: React.FC = () => {
    return (
        <Router>
            <div className="flex flex-col h-screen"> {/* Asegura que la página ocupe toda la altura */}
                <header className="bg-blue-600 text-white p-4"> {/* Ejemplo de Tailwind para el header */}
                    <Navbar />
                </header>
                <main className="flex-grow bg-gray-100 p-6"> {/* Contenido central */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/Portfolio" element={<Portfolio />} />
                    </Routes>
                </main>
                <footer className="bg-blue-600 text-white p-4"> {/* Ejemplo de Tailwind para el footer */}
                    <Footer />
                </footer>
            </div>
        </Router>
    );
};

export default App;
