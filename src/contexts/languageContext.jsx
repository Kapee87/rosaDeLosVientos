import React, { createContext, useContext, useEffect, useState } from 'react';

// Creamos el contexto del idioma
const LanguageContext = createContext();

// Hook personalizado para usar el contexto del idioma
export const useLanguage = () => useContext(LanguageContext);

// Proveedor del contexto del idioma
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es'); // Inicialmente el idioma será español

    const toggleLanguage = () => {
        setLanguage(prevLanguage => prevLanguage === 'es' ? 'en' : 'es') // Alternar entre español e inglés
    };
    

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
