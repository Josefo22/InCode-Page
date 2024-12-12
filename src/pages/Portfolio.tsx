import React, { useState } from "react";

const Portfolio: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const projects = [
        {
            id: 1,
            title: "Proyecto A",
            category: "sitio-institucional",
            description: "Descripción del proyecto A",
        },
        {
            id: 2,
            title: "Proyecto B",
            category: "landing-page",
            description: "Descripción del proyecto B",
        },
        {
            id: 3,
            title: "Proyecto C",
            category: "tienda-online",
            description: "Descripción del proyecto C",
        },
        {
            id: 4,
            title: "Proyecto D",
            category: "sitio-institucional",
            description: "Descripción del proyecto D",
        },
        {
            id: 5,
            title: "Proyecto E",
            category: "landing-page",
            description: "Descripción del proyecto E",
        },
        {
            id: 6,
            title: "Proyecto F",
            category: "tienda-online",
            description: "Descripción del proyecto F",
        },
    ];

    const filteredProjects =
        selectedCategory === "all"
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    return (
        <div className="max-w-7xl mx-auto py-16 px-6">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-blue-600">Portfolio</h1>
                <p className="text-gray-600">
                    Aquí mostramos algunos de los proyectos destacados de InCode.
                </p>
            </header>

            {/* Filtros de Categorías */}
            <div className="flex justify-center space-x-6 mb-8">
                <button
                    onClick={() => setSelectedCategory("all")}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                >
                    Todos
                </button>
                <button
                    onClick={() => setSelectedCategory("sitio-institucional")}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                >
                    Sitios Institucionales
                </button>
                <button
                    onClick={() => setSelectedCategory("landing-page")}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                >
                    Landing Pages
                </button>
                <button
                    onClick={() => setSelectedCategory("tienda-online")}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                >
                    Tiendas Online
                </button>
            </div>

            {/* Grid de Proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold text-blue-600 mb-3">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <a
                            href="#"
                            className="inline-block mt-4 px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
                        >
                            Ver más
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
