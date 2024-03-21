import React from 'react'
import { useLanguage } from '../contexts/languageContext'
import { texts } from '../utils/allTexts'
import Socials from './Socials'

function Footer() {
    const { language } = useLanguage()
    return (
        <footer className="footer footer-center p-5 md:p-10 bg-base-200 text-base-content rounded">
            <nav>
                <div className=" flex items-center space-x-2 md:space-x-4">
                    <a href="#" className={'hover:drop-shadow-dkModeB'}>{language == 'en' ? texts.navbar.home.en : texts.navbar.home.es} </a>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className={'hover:drop-shadow-dkModeB'} >Editorial</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li>
                                <a href='#editorial'>{language == 'es' ? texts.navbar.editorial.sub.editorial.es : texts.navbar.editorial.sub.editorial.en}</a>
                            </li>
                            <li>
                                <a href='#management'>{language == 'es' ? texts.navbar.editorial.sub.gestion.es : texts.navbar.editorial.sub.gestion.en}</a>
                            </li>
                            <li>
                                <a href='#performers'>{language == 'es' ? texts.navbar.editorial.sub.interpretes.es : texts.navbar.editorial.sub.interpretes.en}</a>
                            </li>
                        </ul>
                    </div>
                    <a href="#registration" className={'hover:drop-shadow-dkModeB'}>{language == 'en' ? texts.navbar.registration.en : texts.navbar.registration.es}</a>
                    <a href="#contact" className={'hover:drop-shadow-dkModeB'}>{language == 'en' ? texts.navbar.contact.en : texts.navbar.contact.es}</a>
                </div>
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