import React from 'react';
import { texts } from '../utils/allTexts';


const HeroSection = () => {
    return (
        <div className="hero-section h-screen -mt-16 -mx-4 flex items-center">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">La Rosa De Los Vientos - Tu editorial musical</h1>
                <p className="text-lg">{texts.hero.slogan.es}</p>
            </div>
        </div>
    );
};

export default HeroSection;
