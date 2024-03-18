import React from 'react'
import arg from "../assets/arg.png"
import eng from "../assets/eng.avif"
import { useLanguage } from '../contexts/languageContext';

function LanguageSelector() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className='flex items-center pe-24 space-x-1'>
            <img src={arg} alt="bandera de idioma argentina" className='h-5 rounded-md' />
            <div className="tooltip tooltip-bottom flex" data-tip={language == 'es' ? 'Turn to English' : 'Cambiar a Español'}>
                <input type="checkbox" className="toggle toggle-sm " onClick={toggleLanguage} />
            </div>
            <img src={eng} alt="bandera de idioma inglés" className='h-5 w-7 rounded-md' />
        </div>
    )
}

export default LanguageSelector