import React, { useState } from 'react';
import logo from '../assets/Logo.svg';
import { SunIcon, MoonIcon } from '@heroicons/react/solid'; // Usa iconos para mejorar la accesibilidad

const Navbar: React.FC = () => {
    // Estado para controlar si el menú está abierto o cerrado
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Estado para controlar el modo oscuro
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Función para cambiar el estado del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Función para alternar entre modo oscuro y claro
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white'} py-4 shadow-md rounded-b-2xl`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo a la izquierda */}
                <div className="flex-shrink-0">
                    <a href="/" className="text-2xl font-bold hover:text-gray-200">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-12 w-auto transition-transform duration-500 transform hover:scale-110"
                        />
                    </a>
                </div>

                {/* Enlaces centrados para escritorio */}
                <ul className="hidden lg:flex space-x-8 mx-auto">
                    <li>
                        <a
                            href="/"
                            className="navbar-link hover:text-gray-200 transition-colors duration-300 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300"
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="navbar-link hover:text-gray-200 transition-colors duration-300 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300"
                        >
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className="navbar-link hover:text-gray-200 transition-colors duration-300 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300"
                        >
                            Contacto
                        </a>
                    </li>
                    <li>
                        <a
                            href="/Portfolio"
                            className="navbar-link hover:text-gray-200 transition-colors duration-300 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300"
                        >
                            Portafolio
                        </a>
                    </li>
                </ul>

                {/* Icono de hamburguesa para dispositivos móviles */}
                <div className="block lg:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Botón de Modo Oscuro */}
                <button
                    onClick={toggleDarkMode}
                    className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    aria-label={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"}
                >
                    {isDarkMode ? (
                        <SunIcon className="w-6 h-6 text-yellow-500" />
                    ) : (
                        <MoonIcon className="w-6 h-6 text-blue-500" />
                    )}
                </button>
            </div>

            {/* Menú desplegable para móviles */}
            <div
                className={`lg:hidden ${isMenuOpen ? 'block animate-slideIn' : 'hidden'
                    } ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-blue-600'} py-4 rounded-b-xl shadow-lg transition-all duration-500 ease-in-out`}
            >
                <ul className="space-y-4 text-center">
                    <li>
                        <a
                            href="/"
                            className="navbar-link hover:text-gray-200 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="navbar-link hover:text-gray-200 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className="navbar-link hover:text-gray-200 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contacto
                        </a>
                    </li>
                    <li>
                        <a
                            href="/Portfolio"
                            className="navbar-link hover:text-gray-200 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Portafolio
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
