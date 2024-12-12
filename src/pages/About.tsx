import React from 'react';
import img1 from '../assets/img1.svg';

const About: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <header className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16 text-center relative overflow-hidden">
                {/* Animacion para el titulo */}
                <h1 className="text-5xl font-extrabold text-shadow animate__animated animate__fadeIn animate__delay-1s">
                    Conoce a InCode
                </h1>
                {/* Animacion para la descripcion */}
                <p className="mt-4 text-xl text-black animate__animated animate__fadeIn animate__delay-2s">
                    Somos una agencia de desarrollo web y consultoria digital, comprometidos con llevar a tu negocio al siguiente nivel.
                </p>

                
            </header>

            <section className="max-w-7xl mx-auto py-20 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-bold text-blue-600 mb-4 animate__animated animate__fadeIn animate__delay-1s">Nuestra Mision</h2>
                        <p className="text-lg text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-2s">
                            En InCode, nuestro proposito es transformar tu presencia digital con soluciones personalizadas que optimicen la operacion y visibilidad de tu negocio en linea.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2 animate__animated animate__fadeIn animate__delay-3s">Por que elegirnos?</h3>
                        <p className="text-lg text-gray-600 animate__animated animate__fadeIn animate__delay-4s">
                            Nos dedicamos a ofrecer estrategias digitales inteligentes, adaptadas a las necesidades de cada cliente, garantizando el exito en cada proyecto.
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src={img1}
                            alt="Logo"
                            className="rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-2s"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-teal-600 text-white py-16">
                <h2 className="text-3xl font-semibold text-center mb-8 animate__animated animate__fadeIn animate__delay-5s">Nuestros Valores</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
                    <div className="bg-white text-center p-6 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-teal-600 mb-4">Innovacion</h3>
                        <p className="text-lg text-gray-700">
                            Buscamos siempre las soluciones mas innovadoras para mejorar la experiencia de nuestros clientes y usuarios finales.
                        </p>
                    </div>
                    <div className="bg-white text-center p-6 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-teal-600 mb-4">Compromiso</h3>
                        <p className="text-lg text-gray-700">
                            Estamos comprometidos con la calidad y la satisfaccion de nuestros clientes, garantizando que cada proyecto sea exitoso.
                        </p>
                    </div>
                    <div className="bg-white text-center p-6 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300">
                        <h3 className="text-2xl font-semibold text-teal-600 mb-4">Colaboracion</h3>
                        <p className="text-lg text-gray-700">
                            Creemos que el trabajo en equipo y la colaboracion con nuestros clientes son la clave para lograr proyectos exitosos.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 animate__animated animate__fadeIn animate__delay-6s">Listo para transformar tu negocio?</h2>
                <p className="text-lg text-gray-600 mb-6 animate__animated animate__fadeIn animate__delay-7s">
                    En InCode, tenemos la experiencia y las herramientas para ayudarte a alcanzar tus metas digitales. Contactanos hoy y empieza tu transformacion digital!
                </p>
                <a href="/contact" className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 animate__animated animate__fadeIn animate__delay-8s">
                    Contactanos
                </a>
            </section>
        </div>
    );
};

export default About;
