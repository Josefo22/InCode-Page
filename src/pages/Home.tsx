import React from 'react';
import img1 from '../assets/img1.svg';

const Home: React.FC = () => {
    return (
        <div className="bg-gray-50">

            {/* Encabezado de pantalla completa */}
            <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white h-screen flex flex-col justify-center items-center relative overflow-hidden rounded-b-3xl shadow-lg">
                {/* Contenedor de título y subtítulo */}
                <div className="flex flex-col items-center text-center animate__animated animate__fadeIn">
                    <h1 className="text-6xl font-bold mb-4">Bienvenidos a InCode</h1>
                    <p className="mt-6 text-2xl text-gray-200 px-4">
                        Creamos soluciones digitales a medida para impulsar tu negocio hacia el éxito.
                        <br />
                        <span className="block mt-4 text-lg text-gray-100">
                            Somos expertos en diseño web, dedicados a crear sitios atractivos y modernos que capturan la esencia de cada negocio. Con años de experiencia en el sector, ofrecemos soluciones personalizadas que combinan funcionalidad y estética, garantizando una excelente experiencia de usuario.
                        </span>
                    </p>
                </div>

                {/* Indicador de desplazamiento */}
                <div className="absolute bottom-8 flex flex-col items-center animate-bounce">
                    <span className="text-white text-sm mb-2">Desplázate hacia abajo</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white animate-bounce"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </header>



            {/* Servicios */}
            <section className="bg-gray-50 py-16 px-6 text-center">
                <h2 className="text-4xl font-semibold text-blue-600 mb-6 animate__animated animate__fadeIn">
                    Nuestros Servicios
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
                    Ofrecemos soluciones innovadoras para fortalecer tu presencia en línea y optimizar tus procesos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Servicio 2: Sitio Institucional */}
                    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-blue-600 mb-3">Sitio Institucional</h3>
                        <p className="text-gray-600 mb-4">
                            Creamos sitios web institucionales que reflejan la identidad y valores de su organización. Nos aseguramos de que su sitio institucional comunique de manera efectiva su misión, visión y servicios, proporcionando una experiencia de usuario óptima y una estructura que facilita la comunicación con su audiencia.
                        </p>
                        <a
                            href="#"
                            className="inline-block mt-4 px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
                        >
                            Ver más
                        </a>
                    </div>

                    {/* Servicio 3: Landing Page */}
                    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-blue-600 mb-3">Landing Page</h3>
                        <p className="text-gray-600 mb-4">
                            Desarrollamos páginas de aterrizaje (Landing Pages) y sitios de una sola página (Onepage) que están diseñados para captar la atención de sus visitantes desde el primer momento. Ideales para campañas de marketing, lanzamientos de productos o servicios específicos, estas páginas están optimizadas para la conversión.
                        </p>
                        <a
                            href="#"
                            className="inline-block mt-4 px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
                        >
                            Ver más
                        </a>
                    </div>

                    {/* Servicio 4: Tienda Online */}
                    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-blue-600 mb-3">Tienda Online</h3>
                        <p className="text-gray-600 mb-4">
                            Soluciones completas para el desarrollo de tiendas online y plataformas de ecommerce. Entendemos la importancia de una experiencia de compra fluida y segura, por lo que nos enfocamos en crear tiendas virtuales que no solo sean estéticamente agradables, sino también robustas y fáciles de gestionar.
                        </p>
                        <a
                            href="#"
                            className="inline-block mt-4 px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
                        >
                            Ver más
                        </a>
                    </div>

                </div>
            </section>



            


            {/* Testimonios */}
            <section className="py-16 px-6 bg-white text-center">
                <h2 className="text-4xl font-semibold text-blue-600 mb-6 animate__animated animate__fadeIn">Testimonios</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    <div className="bg-gray-100 p-6 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8 md:mb-0 animate__animated animate__fadeIn animate__delay-1s">
                        <p className="text-gray-600 mb-4">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Cras venenatis euismod malesuada. Nulla id orci libero.”
                        </p>
                        <h4 className="text-blue-600 font-semibold">Juan Pérez - Bogotá, Colombia</h4>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8 md:mb-0 animate__animated animate__fadeIn animate__delay-2s">
                        <p className="text-gray-600 mb-4">
                            “Mauris et risus scelerisque, tincidunt augue ac, feugiat dui. Aenean vel erat et lectus convallis tincidunt ut sit amet ligula. Quisque convallis feugiat dui.”
                        </p>
                        <h4 className="text-blue-600 font-semibold">Carlos Rodríguez - Buenos Aires, Argentina</h4>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8 md:mb-0 animate__animated animate__fadeIn animate__delay-3s">
                        <p className="text-gray-600 mb-4">
                            “Sed condimentum purus in arcu vehicula, id pretium sapien tempor. Donec interdum erat eget mi elementum, eu suscipit arcu volutpat. Etiam eget ligula vel sapien.”
                        </p>
                        <h4 className="text-blue-600 font-semibold">Maria Fernández - Madrid, España</h4>
                    </div>
                </div>
            </section>


            {/* Contacto */}
            <section className="py-16 px-6 bg-gray-50 text-center">
                <h2 className="text-4xl font-semibold text-blue-600 mb-6">Contacto</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                    ¡Estamos a solo un mensaje o llamada de distancia! Esperamos con entusiasmo colaborar contigo y hacer que tu experiencia con nosotros sea excepcional.
                </p>
                <form className="max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Nombre *"
                        className="w-full p-3 mb-4 rounded-lg shadow-sm"
                    />
                    <input
                        type="email"
                        placeholder="Email *"
                        className="w-full p-3 mb-4 rounded-lg shadow-sm"
                    />
                    <input
                        type="tel"
                        placeholder="Teléfono *"
                        className="w-full p-3 mb-4 rounded-lg shadow-sm"
                    />
                    <textarea
                        placeholder="Mensaje"
                        className="w-full p-3 mb-4 rounded-lg shadow-sm"
                    ></textarea>
                    <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
                        Enviar Consulta
                    </button>
                </form>
            </section>

        </div>
    );
};

export default Home;
