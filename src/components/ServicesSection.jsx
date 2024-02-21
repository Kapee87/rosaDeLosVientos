import React from 'react'

function ServicesSection() {
    return (
        <div className="py-20 bg-primary-100" id='services'>
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
                    <div className="p-4 bg-white shadow-md">
                        <h3 className="text-xl font-bold mb-2">Registro de Canciones y Artistas</h3>
                        <p>Te ayudamos a registrar tus obras y a proteger tus derechos como creador.</p>
                    </div>
                    <div className="p-4 bg-white shadow-md">
                        <h3 className="text-xl font-bold mb-2">Asistencia Administrativa</h3>
                        <p>Nos encargamos del seguimiento administrativo de tus obras para garantizar su protección y cobro por su uso.</p>
                    </div>
                    <div className="p-4 bg-white shadow-md">
                        <h3 className="text-xl font-bold mb-2">Gestión de Derechos de Autor</h3>
                        <p>Administramos los derechos de autor y reclamamos en caso de uso indebido de tus creaciones musicales.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection