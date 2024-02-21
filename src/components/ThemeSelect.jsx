import React, { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/languageContext'
import { texts } from '../utils/allTexts'

function ThemeSelect({ navLinkClass }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem("theme") : 'coffee')
    const { language } = useLanguage()

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    const changeTheme = (e) => {
        console.log(e.target.value)
        setTheme(e.target.value)
    }

    return (
        <select className={`select w-full max-w-xs min-w-fit`} defaultValue={"tema"} onChange={changeTheme}>
            <option value={"tema"} disabled >{language == 'es' ? texts.navbar.theme.es : texts.navbar.theme.en} </option>
            <option>light</option>
            <option>dark</option>
            <option>cupcake</option>
            <option>bumblebee</option>
            <option>emerald</option>
            <option>corporate</option>
            <option>synthwave</option>
            <option>retro</option>
            <option>cyberpunk</option>
            <option>valentine</option>
            <option>halloween</option>
            <option>garden</option>
            <option>forest</option>
            <option>aqua</option>
            <option>lofi</option>
            <option>pastel</option>
            <option>fantasy</option>
            <option>wireframe</option>
            <option>black</option>
            <option>luxury</option>
            <option>dracula</option>
            <option>cmyk</option>
            <option>autumn</option>
            <option>business</option>
            <option>acid</option>
            <option>lemonade</option>
            <option>night</option>
            <option>coffee</option>
            <option>winter</option>
            <option>dim</option>
            <option>nord</option>
            <option>sunset</option>
        </select>
    )
}

export default ThemeSelect