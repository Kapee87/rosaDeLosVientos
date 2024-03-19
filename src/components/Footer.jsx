import React from 'react'
import { useLanguage } from '../contexts/languageContext'
import { texts } from '../utils/allTexts'
import Socials from './Socials'

function Footer() {
    const { language } = useLanguage()
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <Socials />
            </nav>
            <aside>
                <div className="container mx-auto">
                    <p className="text-sm">&copy; {new Date().getFullYear()} {language == 'es' ? texts.footer.es.copyright : texts.footer.en.copyright}</p>
                    <p className="text-sm">{language == 'es' ? texts.footer.es.designedBy : texts.footer.en.designedBy} <a href="https://www.kapeehdev.com.ar" className="underline">KapeehDev</a></p>
                </div>
            </aside>
        </footer>
    )
}

export default Footer