import React, { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/languageContext';

function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);
    const { language } = useLanguage()

    // Verifica la posición de desplazamiento y muestra u oculta el botón
    const handleScroll = () => {
        if (window.scrollY > 100) { // Cambia este valor según sea necesario
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    // Agrega y remueve el event listener para el scroll cuando el componente se monta o desmonta
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a href="#hero" className='fixed bottom-4 right-6 md:bottom-12 md:right-20 tooltip' data-tip={language == 'es' ? 'Ir arriba' : 'Scroll to top'} >
            {showButton ?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" strokeWidth={1.5} className={`w-10 h-10 fill-secondary stroke-primary-content`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                : ''}
        </a>

    )
}

export default ScrollToTop