import React, { useState, useRef } from 'react'
import Field, { FIELD_TYPES } from '../../components/Field/Field'
import emailjs from "emailjs-com"
import HCaptcha from '@hcaptcha/react-hcaptcha'

const Form = () => {
    const [messageStatus, setMessageStatus] = useState('')
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        email: '',
        message: ''
    })
    const [captchaToken, setCaptchaToken] = useState(null)
    const formReset = useRef()
    const captchaRef = useRef()
    const [showCaptcha, setShowCaptcha] = useState(false)

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleFocusForm = () => {
       if(!showCaptcha) setShowCaptcha(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!captchaToken) {
            setMessageStatus("Merci de valider le captcha avant d’envoyer.")
            return
        }

        const dataToSend = {
            ...formData,
            'h-captcha-response': captchaToken
        }

        emailjs.init('KUgA4JMsoQ82S_jn-')

        emailjs.send('service_carolo', 'template_7q7eo65', dataToSend).then(
            () => {
                setMessageStatus('Message envoyé avec succès !')
                formReset.current.reset()
                setCaptchaToken(null)
                captchaRef.current.resetCaptcha()
            },
            (error) => {
                setMessageStatus("Échec lors de l’envoi.")
                console.log('Erreur : ', error)
            }
        )
    }

    return (
        <section className='form__container' id='contact'>
            <h2>Contactez moi !</h2>
            <p>Des questions ? Des projets ? N'hésitez pas à me laisser un message pour pouvoir échanger</p>
            <form className='form__content' onSubmit={handleSubmit} method="POST" ref={formReset} onFocus={handleFocusForm}>
                <div className="row">
                    <div className="col">
                        <Field
                            type={FIELD_TYPES.INPUT}
                            inputType='text'
                            label='nom'
                            textlabel='Nom'
                            id='nom'
                            name='nom'
                            onChange={handleChange}
                        />
                        <Field
                            type={FIELD_TYPES.INPUT}
                            inputType='text'
                            label='prenom'
                            textlabel='Prénom'
                            id='prenom'
                            name='prenom'
                            onChange={handleChange}
                        />
                        <Field
                            type={FIELD_TYPES.INPUT}
                            inputType='email'
                            label='email'
                            textlabel='E-mail'
                            id='email'
                            name='email'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col">
                        <Field
                            type={FIELD_TYPES.TEXTAREA}
                            label='message'
                            textlabel='Message'
                            id='message'
                            name='message'
                            onChange={handleChange}
                        />
                    </div>
                </div>
                {showCaptcha &&
                    <HCaptcha
                        sitekey="e130d0a2-efe6-484e-8dc4-a57e09286020"
                        onVerify={setCaptchaToken}
                        ref={captchaRef}
                        className='form__content--captcha'
                    />
                }

                <p>{messageStatus}</p>
                <button type='submit' className='form__content--submit'>Envoyer</button>
            </form>
        </section>
    )
}

export default Form
