import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'animate.css';
import './index.css'; // Asegúrate de que el archivo de estilo esté presente
import App from './App'; // Asegúrate de que App.tsx esté en el mismo nivel o en la ruta correcta

// Renderizar la aplicación en el contenedor 'root'
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
