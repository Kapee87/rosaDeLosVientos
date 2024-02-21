import React from 'react'

function FAQSection() {
    
    return (
        <div className='min-h-screen' id='faq'>
            <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    ¿Qué servicios ofrece La Rosa De Los Vientos?
                </div>
                <div className="collapse-content">
                    <p>Nuestra editorial musical ofrece servicios de registro de canciones y artistas, asistencia administrativa y gestión de derechos de autor.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    ¿Cómo puedo registrar una canción?
                </div>
                <div className="collapse-content">
                    <p>Puedes registrar una canción a través de nuestro servicio de registro en línea. ¡Es rápido y sencillo!</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Pregunta frecuente
                </div>
                <div className="collapse-content">
                    <p>Respuesta a esa pregunta frecuente</p>
                </div>
            </div>
        </div>
    )
}

export default FAQSection