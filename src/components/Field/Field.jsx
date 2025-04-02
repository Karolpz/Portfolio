import React from 'react'

export const FIELD_TYPES = {
    INPUT:1,
    TEXTAREA:2
}

const Field = ({ label, textlabel, type, id, value, onChange, name, placeholder, inputType }) => {
    switch (type) {
        case FIELD_TYPES.INPUT:
            return (
                <div className="fieldInput">
                    <label htmlFor={label}>{textlabel}</label>
                    <input type={inputType} id={id} value={value} onChange={onChange} name={name} placeholder={placeholder} required />
                </div>
            );
        case FIELD_TYPES.TEXTAREA:
            return (
                <div className="fieldTextarea">
                    <label htmlFor={label}>{textlabel}</label>
                    <textarea id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} rows='11' required />
                </div>
            );
    }

}

export default Field