import React from 'react'
import { useLanguage } from '../contexts/languageContext'
import { texts } from '../utils/allTexts'

function Registration() {
    const { language } = useLanguage()
    return (
        <section className="py-20 bg-primary-100 flex flex-col gap-4 md:gap-10 items-center" id='registration'>
            <div>
                <h2 className="text-3xl font-bold mb-8 order-2">
                    {language == 'es' ? texts.registros.title.es : texts.registros.title.en}
                </h2>
            </div>
            <div className="container flex items-center justify-evenly gap-10">
                <div className=" flex flex-col gap-5 md:[&_div]:min-h-44 ">
                    {
                        texts.registros.items.map(item => (
                            <div className='container flex flex-col lg:flex-row flex-wrap gap-2 items-center' key={crypto.randomUUID()}>
                                <h4 className='drop-shadow-dkModeB'>
                                    {language == 'es' ? item.title.es : item.title.en}
                                </h4>
                                {
                                    item.subItems
                                        ?
                                        item.subItems?.map(subItem => (
                                            <details className="p-4 bg-base-300 shadow-md card collapse collapse-arrow" key={crypto.randomUUID()}>
                                                <summary className='collapse-title'>
                                                    <h3 className="text-xl font-bold mb-2">{language == 'es' ? subItem.title.es : subItem.title.en || "bueeebueee"} {subItem.icon ?? subItem.icon} </h3>
                                                </summary>
                                                <div className="collapse-content">
                                                    <p>{language == 'es' ? subItem.content.es : subItem.content.en || "holo"}</p>
                                                </div>
                                            </details>
                                        ))
                                        :
                                        <div className="p-4 bg-base-300 shadow-md card " key={crypto.randomUUID()}>
                                            <p>{language == 'es' ? item.content.es : item.content.en || "holo"}</p>
                                        </div>
                                }
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Registration