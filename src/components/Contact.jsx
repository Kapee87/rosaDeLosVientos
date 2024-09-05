import { useRef, useState } from 'react'
import { useLanguage } from '../contexts/languageContext'
import { texts } from '../utils/allTexts'
import emailjs from '@emailjs/browser';

function Contact() {
    const { language } = useLanguage()
    const [formAlert, setFormAlert] = useState({
        "show": false,
        "success": false,
        "msj": ""
    })
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const userName = form.current.user_name.value.trim();
        const userEmail = form.current.user_email.value.trim();
        const message = form.current.message.value.trim();

        if (!userName || !userEmail || !message) {
            setFormAlert({ "show": true, "msj": "Por favor complete todos los campos", "success": false });
            return;
        }

        if (!validateEmail(userEmail)) {
            setFormAlert({ "show": true, "msj": "Por favor ingrese un correo electrónico válido", "success": false });
            return;
        }

        emailjs
            .sendForm('service_8c4cl0e', 'template_tvt7pod', form.current, {
                publicKey:'fczRYMXThVJ6sgtRo'
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setFormAlert({ "show": true, "msj": "El mensaje fue enviado correctamente", "success": true })
                    const timeout = setTimeout(() => {
                        setFormAlert({ "show": false, "msj": "", "success": false })
                        clearTimeout(timeout)
                    }, 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setFormAlert({ "show": true, "msj": "Hubo un error enviando el mensaje, intente de nuevo más tarde", "success": false })
                    const timeout = setTimeout(() => {
                        setFormAlert({ "show": false, "msj": "", "success": false })
                        clearTimeout(timeout)
                    }, 5000);
                },
            );
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <section id='contact' className='min-h-screen flex flex-col items-center pt-20'>
            <h2 className="text-3xl font-bold mb-8 text-center">{language == 'es' ? texts.contact.es : texts.contact.en}</h2>
            <form className='flex flex-col gap-4 [&_input]:rounded-md [&_textarea]:rounded-md [&_input]:flex  [&_input]:max-w-7xl [&_input]:w-max' ref={form} onSubmit={sendEmail}>
                <label htmlFor="">
                    {language == 'es' ? texts.contact.nameInput.title.es : texts.contact.nameInput.title.en}  :
                    <input type="text" name='user_name' />
                </label>
                <label htmlFor="">
                    {language == 'es' ? texts.contact.mailInput.title.es : texts.contact.mailInput.title.en}  :
                    <input type="text" name='user_email' />
                </label>
                <label htmlFor="" className='flex flex-col'>
                    {language == 'es' ? texts.contact.msgInput.title.es : texts.contact.msgInput.title.en}  :
                    <textarea name="message" id="" cols="100" rows="10" className='max-w-64 md:max-w-7xl' ></textarea>
                </label>
                {
                    formAlert.show
                        ?
                        <div className={`tooltip ${formAlert.success ? 'text-success' : 'text-error'}`}>
                            <p>{formAlert?.msj} </p>
                        </div>
                        : ''
                }
                <input type="submit" value="Enviar" className='btn btn-outline' />

            </form>

        </section>

    )
}

export default Contact
