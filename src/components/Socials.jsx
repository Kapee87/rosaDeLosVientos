import React from 'react'
import instagram from '../assets/sociales-icons/instagram-icon.png'
import email from '../assets/sociales-icons/email-icon.png'
import facebook from '../assets/sociales-icons/facebook-icon.png'


function Socials() {
    return (
        <div className='flex gap-4 justify-center [&_a]:h-10 [&_a]:w-10'>
            <a href="https://www.instagram.com/larosadelosvientoseditorial?utm_source=qr&igsh=aWNoeXA5N3N1ZHp0" target='_blank' className='scale-75'  >
                <img src={instagram} alt="" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61556889106372&mibextid=ZbWKwL" target='_blank' className='scale-75' >
                <img src={facebook} alt="" />
            </a>
            <a href="mailto:Larosadelosvientoseditorial@gmail.com" target='_blank'>
                <img src={email} alt="" />
            </a>
        </div>
    )
}


export default Socials