import React from 'react';
import { texts } from '../utils/allTexts';
import { useLanguage } from '../contexts/languageContext';


const HeroSection = () => {
    const { language } = useLanguage();

    return (
        <div className="hero-section h-screen -mt-16 -mx-4 flex items-center" id='hero'>
            <div className="container mx-auto text-center bg-secondary bg-opacity-25 w-4/6 p-10 drop-shadow-2xl text-primary-content">
                <h1 className="text-4xl font-bold mb-4 ">La Rosa De Los Vientos - {language == 'es' ? texts.hero.title.es : texts.hero.title.en} </h1>
                <p className="text-lg">{language == 'es' ? texts.hero.slogan.es : texts.hero.slogan.en}</p>
            </div>
        </div>
    );
};

export default HeroSection;
