import React, { useState, useRef } from 'react'
import Field, { FIELD_TYPES } from '../../components/Field/Field'
import emailjs from "emailjs-com";

const Form = () => {

    const [messageStatus, setMessageStatus] = useState('')
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        email: '',
        message: ''
    })
    const formReset = useRef()

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        emailjs.init('KUgA4JMsoQ82S_jn-')
        event.preventDefault()
        emailjs.send('service_carolo', 'template_7q7eo65', formData).then(
            () => {
                setMessageStatus('Message envoyé avec succès !')
                formReset.current.reset()
            },
            (error) => {
                setMessageStatus("Echec lors de l'envoi")
                console.log('Erreur : ', error);
            },
        );

    }

    return (
        <section className='form__container' id='contact'>
            <h2>Contactez moi !</h2>
            <p>Des questions ? Des projets ? N'hésitez pas à me laisser un message pour pouvoir échanger</p>
            <form className='form__content' onSubmit={handleSubmit} method="POST" ref={formReset}>
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
                <p>{messageStatus}</p>
                <button type='submit' className='form__content--submit'>Envoyer</button>
            </form>
        </section >
    )
}

export default Form