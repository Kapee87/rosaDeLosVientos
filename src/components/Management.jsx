import React from 'react'
import { useLanguage } from '../contexts/languageContext'
import { texts } from '../utils/allTexts'

function Management() {
    const { language } = useLanguage()
    return (
        <section className="py-20 bg-primary-100" id='management'>
            <div className="container flex flex-col md:flex-row items-center justify-evenly gap-10">
                {/* <h2 className="text-3xl font-bold mb-8"> {language == 'es' ? texts.services.title.es : texts.services.title.en} </h2> */}
                <h2 className="text-3xl font-bold mb-8"> {language == 'es' ? "Servicios de  gestión" : "Management services"} </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center md:[&_div]:min-h-44 ">
                    {
                        texts.gestion.items.map(item => (
                            <div className="p-4 bg-neutral-content text-neutral shadow-md card" key={crypto.randomUUID()}>
                                <h3 className="text-xl font-bold mb-2">{language == 'es' ? item.title.es : item.title.en}</h3>
                                <p >{language == 'es' ? item.content.es : item.content.en}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Management