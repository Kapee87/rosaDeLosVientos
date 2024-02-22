import React from 'react'
import { useLanguage } from '../contexts/languageContext'
import { texts } from '../utils/allTexts'

function Contact() {
    const { language } = useLanguage()
    return (
        <>
            <h2 className="text-3xl font-bold mb-8 text-center">{language == 'es' ? texts.contact.es : texts.contact.en}</h2>
            <p>Datos de contacto, mail, redes, etc etc etc</p>
        </>

    )
}

export default Contact