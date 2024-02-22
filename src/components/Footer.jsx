import React from 'react'
import { useLanguage } from '../contexts/languageContext'
import { texts } from '../utils/allTexts'

function Footer() {
    const { language } = useLanguage()
    return (
        <footer className="py-8 bg-primary-800 text-accent text-center">
            <div className="container mx-auto">
                <p className="text-sm">&copy; {new Date().getFullYear()} {language == 'es' ? texts.footer.es.copyright : texts.footer.en.copyright}</p>
                <p className="text-sm">{language == 'es' ? texts.footer.es.designedBy : texts.footer.en.designedBy} <a href="https://www.kapeehdev.com.ar" className="underline">KapeehDev</a></p>
            </div>
        </footer>
    )
}

export default Footer