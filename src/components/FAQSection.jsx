import React from 'react'
import { useLanguage } from '../contexts/languageContext'
import { texts } from '../utils/allTexts'

function FAQSection() {
    const { language } = useLanguage()
    return (
        <div className='mb-10' id='faq'>
            <h2 className="text-3xl font-bold mb-8 text-center">{language == 'es' ? texts.faq.title.es : texts.faq.title.en}</h2>
            {
                texts.faq.items.map(item => (
                    <div className="collapse collapse-arrow bg-base-200" key={crypto.randomUUID()}>
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            {language == 'es' ? item.question.es : item.question.en}
                        </div>
                        <div className="collapse-content">
                            <p>{language == 'es' ? item.answer.es : item.answer.en}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default FAQSection