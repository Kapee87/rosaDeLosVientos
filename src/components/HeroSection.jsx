import React from 'react';
import { texts } from '../utils/allTexts';
import { useLanguage } from '../contexts/languageContext';


const HeroSection = () => {
    const { language } = useLanguage();

    return (
        <div className="hero-section h-screen -mt-16 -mx-4 flex items-center">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">La Rosa De Los Vientos - {language == 'es' ? texts.hero.title.es : texts.hero.title.en} </h1>
                <p className="text-lg">{language == 'es' ? texts.hero.slogan.es : texts.hero.slogan.en}</p>
            </div>
        </div>
    );
};

export default HeroSection;
