import React from 'react'
import { useLanguage } from '../contexts/languageContext'
import { texts } from '../utils/allTexts'

function Editorial() {
    const { language } = useLanguage()
    return (
        <section className="py-20 bg-primary-100" id='editorial'>
            <div className="container flex flex-col items-center">
                {/* <h2 className="text-3xl font-bold mb-8"> {language == 'es' ? texts.services.title.es : texts.services.title.en} </h2> */}
                <h2 className="text-3xl font-bold mb-8 !shadow-none"> Editorial </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 place-items-center md:[&_div]:min-h-44 ">
                    {
                        texts.editorial.items.map(item => (
                            <div className="p-4 bg-base-300 shadow-md card cardMin" key={crypto.randomUUID()}>
                                <h3 className="text-xl drop-shadow-2xl font-bold mb-2 ">{language == 'es' ? item.title.es : item.title.en}</h3>
                                <p className=''>{language == 'es' ? item.content.es : item.content.en}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Editorial