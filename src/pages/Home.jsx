import React from 'react'
import HeroSection from '../components/HeroSection'
import Editorial from '../components/Editorial'
import Contact from '../components/Contact'
import Management from '../components/Management'
import Performers from '../components/Performers'
import ScrollToTop from '../components/ScrollToTop'
import Registration from '../components/Registration'

function Home() {
    return (
        <div className='px-4 [&_h2]:drop-shadow-dkModeB'>
            <HeroSection />
            <div className='[&_.card]:rounded-md [&_.card]:shadow-xl [&_.cardMin]:min-h-64 [&_section]:min-h-screen [&_section]:flex [&_section]:items-center px-20'>
                <Editorial />
                <Management />
                <Performers />
                <Registration />
            </div>

            <Contact />
            <ScrollToTop />
        </div>
    )
}

export default Home