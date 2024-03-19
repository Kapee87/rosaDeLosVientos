import React from 'react'
import { useLanguage } from '../contexts/languageContext'
import { texts } from '../utils/allTexts'

function Distribution() {
    const { language } = useLanguage()
    return (
        <section className="py-20 bg-primary-100 flex flex-col gap-4 md:gap-10 items-center" id='registration'>
            <div className="container flex flex-col items-center justify-around ">
                {/* <h2 className="text-3xl font-bold mb-8"> {language == 'es' ? texts.services.title.es : texts.services.title.en} </h2> */}
                <h2 className="text-2xl font-bold mb-8"> {language == 'es' ? texts.distribucion.title.es : texts.distribucion.title.en} </h2>
                <div className=" md:[&_div]:min-h-44 flex flex-col md:flex-row gap-4  ">
                    {
                        texts.distribucion.items.map(item => (
                            <div className='flex flex-col' key={crypto.randomUUID()}>
                                <h4>{language == 'es' ? item.title.es : item.title.en} </h4>
                                <div className="p-4 bg-base-300 shadow-md card cardMin" >
                                    <p>{language == 'es' ? item.content.es : item.content.en || "holo"}</p>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Distribution