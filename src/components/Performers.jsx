import React from 'react'
import { useLanguage } from '../contexts/languageContext'
import { texts } from '../utils/allTexts'

function Performers() {
    const { language } = useLanguage()
    return (
        <section className="py-20 bg-primary-100 flex flex-col gap-4 md:gap-10 items-center" id='performers'>
            <div>
                <h2 className="text-3xl font-bold mb-8 order-2">
                    {language == 'es' ? texts.intepretes.title.es : texts.intepretes.title.en}
                </h2>
            </div>
            <div className="container flex flex-col md:flex-row items-center justify-evenly gap-10">
                <h2 className="card text-2xl font-bold mb-8 md:order-2 md:h-screen p-3 md:p-0 md:px-4 bg-base-300 justify-center "> {language == 'es' ? texts.intepretes.sincronizacion.title.es : texts.intepretes.sincronizacion.title.en} </h2>
                <div className=" flex flex-col gap-5 md:[&_div]:min-h-44 ">
                    {
                        texts.intepretes.sincronizacion.subcategory.map(item => (
                            <div className='container flex flex-col lg:flex-row flex-wrap gap-2 items-center' key={crypto.randomUUID()}>
                                <h4 className='border-b-2 }'>
                                    {language == 'es' ? item.title.es : item.title.en}
                                </h4>
                                {
                                    item.items.map(subItem => (
                                        <details className="p-4 bg-base-300 shadow-md card collapse collapse-arrow" key={crypto.randomUUID()}>
                                            <summary className='collapse-title'>
                                                <h3 className="text-xl font-bold mb-2">{language == 'es' ? subItem.title.es : subItem.title.en || "bueeebueee"} {subItem.icon ?? subItem.icon} </h3>
                                            </summary>
                                            <div className="collapse-content">
                                                <p>{language == 'es' ? subItem.content.es : subItem.content.en || "holo"}</p>
                                            </div>
                                        </details>
                                    ))
                                }
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className="container flex flex-col md:flex-row items-center justify-around gap-10">
                {/* <h2 className="text-3xl font-bold mb-8"> {language == 'es' ? texts.services.title.es : texts.services.title.en} </h2> */}
                <h2 className="text-2xl font-bold mb-8"> {language == 'es' ? texts.intepretes.otros.title.es : texts.intepretes.otros.title.en} </h2>
                <div className=" md:[&_div]:min-h-44 flex flex-col md:flex-row gap-2 ">
                    {
                        texts.intepretes.otros.subcategory.map(item => (
                            <div className="p-4 bg-base-300 shadow-md card cardMin" key={crypto.randomUUID()}>
                                <h3 className="text-xl font-bold mb-2">{language == 'es' ? item.title.es : item.title.en || "bueeebueee"}</h3>
                                <p>{language == 'es' ? item.content.es : item.content.en || "holo"}</p>
                            </div>

                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Performers