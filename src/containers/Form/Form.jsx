import React from 'react'
import Field, { FIELD_TYPES } from '../../components/Field/Field'

const Form = () => {

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    // }

    return (
        <section className='form__container' id='contact'>
            <h2>Contactez moi !</h2>
            <p>Des questions ? Des projets ? N'hésitez pas à me laisser un message pour pouvoir échanger</p>
            <form className='form__content' action="https://formsubmit.co/carolopez.dev@gmail.com" method="POST">
                <div className="row">
                    <div className="col">
                        <Field
                            type={FIELD_TYPES.INPUT}
                            inputType='text'
                            label='nom'
                            textlabel='Nom'
                            id='nom'
                            name='nom'
                        />
                        <Field
                            type={FIELD_TYPES.INPUT}
                            inputType='text'
                            label='prénom'
                            textlabel='Prénom'
                            id='prénom'
                            name='prénom'
                        />
                        <Field
                            type={FIELD_TYPES.INPUT}
                            inputType='email'
                            label='email'
                            textlabel='E-mail'
                            id='email'
                            name='email'
                        />
                    </div>
                    <div className="col">
                        <Field
                            type={FIELD_TYPES.TEXTAREA}
                            label='message'
                            textlabel='Message'
                            id='message'
                            name='message'
                        />
                    </div>
                </div>
                <button type='submit' className='form__content--submit'>Envoyer</button>
            </form>
        </section >
    )
}

export default Form