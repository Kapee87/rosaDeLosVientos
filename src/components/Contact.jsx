import React from 'react'
import { useLanguage } from '../contexts/languageContext'
import { texts } from '../utils/allTexts'
import Socials from './Socials'


function Contact() {
    const { language } = useLanguage()
    return (
        <section id='contact' className='min-h-screen flex flex-col items-center pt-20'>
            <h2 className="text-3xl font-bold mb-8 text-center">{language == 'es' ? texts.contact.es : texts.contact.en}</h2>
            <form action="" className='flex flex-col gap-4 [&_input]:rounded-md [&_textarea]:rounded-md [&_input]:flex  [&_input]:max-w-7xl [&_input]:w-max'>
                <label htmlFor="">
                    {language == 'es' ? texts.contact.nameInput.title.es : texts.contact.nameInput.title.en}  :
                    <input type="text" disabled />
                </label>
                <label htmlFor="">
                    {language == 'es' ? texts.contact.mailInput.title.es : texts.contact.mailInput.title.en}  :
                    <input type="text" disabled />
                </label>
                <label htmlFor="" className='flex flex-col'>
                    {language == 'es' ? texts.contact.msgInput.title.es : texts.contact.msgInput.title.en}  :
                    <textarea name="" id="" cols="100" rows="10" className='max-w-64 md:max-w-7xl' disabled></textarea>
                </label>

                <p>En construccion</p>
            </form>

        </section>

    )
}

export default Contact