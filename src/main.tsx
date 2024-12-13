import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'animate.css';
import './index.css'; // Aseg�rate de que el archivo de estilo est� presente
import App from './App'; // Aseg�rate de que App.tsx est� en el mismo nivel o en la ruta correcta

// Renderizar la aplicaci�n en el contenedor 'root'
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
