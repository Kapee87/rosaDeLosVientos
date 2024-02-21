import React from 'react'

function Footer() {
    return (
        <footer className="py-8 bg-primary-800 text-accent text-center">
            <div className="container mx-auto">
                <p className="text-sm">&copy; {new Date().getFullYear()} La Rosa De Los Vientos. Todos los derechos reservados.</p>
                <p className="text-sm">Diseñado por <a href="https://www.kapeehdev.com.ar" className="underline">KapeehDev</a></p>
            </div>
        </footer>
    )
}

export default Footer