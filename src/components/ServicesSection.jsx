import React from 'react'
import { useLanguage } from '../contexts/languageContext'
import { texts } from '../utils/allTexts'

function ServicesSection() {
    const { language } = useLanguage()
    return (
        <div className="py-20 bg-primary-100" id='services'>
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8"> {language == 'es' ? texts.services.title.es : texts.services.title.en} </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center md:[&_div]:min-h-44 ">
                    {
                        texts.services.items.map(item => (
                            <div className="p-4 bg-white shadow-md" key={crypto.randomUUID()}>
                                <h3 className="text-xl font-bold mb-2">{language == 'es' ? item.title.es : item.title.en}</h3>
                                <p>{language == 'es' ? item.content.es : item.content.en}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default ServicesSection