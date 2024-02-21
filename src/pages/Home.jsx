import React from 'react'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

function Home() {
    return (
        <div className='px-4'>
            <HeroSection />
            <ServicesSection />
            <FAQSection />
            <Contact />
        </div>
    )
}

export default Home