import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí podrías agregar el código para manejar el envío del formulario, como enviar los datos a un servidor.
        alert('Mensaje enviado');
    };

    return (

        <div className="bg-gray-50 py-16">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 animate__animated animate__fadeIn animate__delay-1s">
                    Contactanos
                </h1>
                <p className="text-lg text-gray-600 animate__animated animate__fadeIn animate__delay-2s">
                    Estamos aqui para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>
            </header>

            <div className="max-w-4xl mx-auto px-6">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl space-y-6 animate__animated animate__fadeIn animate__delay-3s">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Tu nombre"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Correo Electronico</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Tu correo electronico"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-lg font-medium text-gray-700">Mensaje</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Escribe tu mensaje"
                            rows={4}
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none"
                        >
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
