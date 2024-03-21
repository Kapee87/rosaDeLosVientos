import React, { useEffect, useState } from 'react';
import ThemeSelect from './ThemeSelect';
// import { logo } from '../utils/logo';
import logo from '../assets/logoL.jpg'
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/languageContext';
import { texts } from '../utils/allTexts';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const { language } = useLanguage();
    const navItem = `hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${showBackground ? 'md:!text-primary' : 'md:text-gray-300'}`
    const TOP_OFFSET = 50;


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className={`sticky top-0 w-full z-50 bg-opacity-80  ${showBackground ? 'bg-base-100 shadow-lg' : ''} `} >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 py-4 ">
                    <a href="#" onClick={closeMenu}>
                        <div className={`flex md:justify-between items-center gap-0 md:gap-4 ${showBackground ? '[&_h2]:!text-primary' : 'text-gray-300'}`}>
                            <div className="mask mask-circle">
                                <img className="image-full h-14" src={logo} alt="Logo de La Rosa De Los Vientos" />
                            </div>
                            <h2 className={`font-bold pe-[1vw] sm:pe-[30vw] lg:pe-0 ${isMenuOpen ? 'text-primary' : 'text-neutral-content'}`}>La Rosa de Los Vientos</h2>
                        </div>
                    </a>
                    <div className="hidden lg:block">
                        <div className=" flex items-center space-x-4">
                            <a href="#" className={navItem}>{language == 'en' ? texts.navbar.home.en : texts.navbar.home.es} </a>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className={navItem} >Editorial</div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a href='#editorial'>{language == 'es' ? texts.navbar.editorial.sub.editorial.es : texts.navbar.editorial.sub.editorial.en}</a></li>
                                    <li><a href='#management'>{language == 'es' ? texts.navbar.editorial.sub.gestion.es : texts.navbar.editorial.sub.gestion.en}</a></li>
                                    <li><a href='#performers'>{language == 'es' ? texts.navbar.editorial.sub.interpretes.es : texts.navbar.editorial.sub.interpretes.en}</a></li>
                                </ul>
                            </div>
                            <a href="#registration" className={navItem}>{language == 'en' ? texts.navbar.registration.en : texts.navbar.registration.es}</a>
                            <a href="#contact" className={navItem}>{language == 'en' ? texts.navbar.contact.en : texts.navbar.contact.es}</a>
                            <LanguageSelector />
                            <ThemeSelect />
                        </div>
                    </div>
                    <div className="-mr-2 flex lg:hidden">
                        <button type="button" onClick={toggleMenu} className="bg-neutral inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-16 space-y-1 sm:px-3 flex flex-col items-center ">
                    <a href="#" className={navItem} onClick={closeMenu}>{language == 'en' ? texts.navbar.home.en : texts.navbar.home.es} </a>
                    <details className="collapse collapse-arrow">
                        <summary tabIndex={0} role="button" className={`text-center ${navItem} collapse-title`} >Editorial </summary>
                        <ul tabIndex={0} className="collapse-content z-[1] menu p-2 shadow bg-base-100 rounded-box justify-center items-center">
                            <li><a href='#editorial' onClick={closeMenu}>{language == 'es' ? texts.navbar.editorial.sub.editorial.es : texts.navbar.editorial.sub.editorial.en}</a></li>
                            <li><a href='#management' onClick={closeMenu}>{language == 'es' ? texts.navbar.editorial.sub.gestion.es : texts.navbar.editorial.sub.gestion.en}</a></li>
                            <li><a href='#performers' onClick={closeMenu}>{language == 'es' ? texts.navbar.editorial.sub.interpretes.es : texts.navbar.editorial.sub.interpretes.en}</a></li>
                        </ul>
                    </details>
                    <a href="#registration" className={navItem} onClick={closeMenu}>{language == 'en' ? texts.navbar.registration.en : texts.navbar.registration.es}</a>
                    <a href="#contact" className={navItem} onClick={closeMenu} >{language == 'en' ? texts.navbar.contact.en : texts.navbar.contact.es}</a>
                    <div className='flex flex-wrap justify-center self-end w-full'>
                        <LanguageSelector />
                        <ThemeSelect />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
