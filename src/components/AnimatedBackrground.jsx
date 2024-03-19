import React, { useState, useEffect } from 'react';

// Lista de iconos para mostrar en el fondo animado
const icons = [
    "💽", "💿", "🎵", "⚡", "🎞️", "🎙️", "🎸", "🎻", "⚡", "🎤",
    "🎹", "💿", "📻", "📼", "🎵", "🎞️", "🎙️", "💽", "🎸", "🎻",
    "🎤", "📻", "📼", "💽", "🎹", "🎵", "📼", "⚡", "💿", "🎞️",
    "📻", "🎙️", "🎸", "🎻", "🎤", "🎹"
];

// Función para generar una posición aleatoria dentro de los límites del contenedor
function getRandomPosition() {
    const min = 0;
    const max = 120;
    const randomPosition = () => `${Math.floor(Math.random() * (max - min + 1)) + min}%`;
    return {
        top: randomPosition(),
        left: randomPosition()
    };
}

/**
 * Componente que muestra un fondo animado con iconos flotantes.
 * Los iconos flotan aleatoriamente en la pantalla y se recargan cada 40 segundos.
 */
function AnimatedBackground() {
    // Estado para controlar la recarga del componente
    const [reload, setReload] = useState(false);

    // Efecto para recargar el componente cada 40 segundos
    useEffect(() => {
        // Función para cambiar el estado de recarga
        const interval = setInterval(() => {
            setReload(prevState => !prevState);
        }, 25000);

        // Limpieza del intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="h-[110vh] w-full fixed top-0 left-0 -z-10">
            {icons.map((icon, index) => (
                <span
                    className="absolute floatClass duration-1000 text-4xl opacity-20"
                    // Establece la posición aleatoria del icono y el retraso de la animación
                    style={{ top: getRandomPosition().top, left: getRandomPosition().left, animationDelay: (index < 6 ? index : Math.ceil(index / 6)) + "s" }}
                    key={index}
                >
                    {icon}
                </span>
            ))}
        </span>
    );
}

export default AnimatedBackground;
