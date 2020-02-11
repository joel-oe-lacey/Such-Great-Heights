import React from 'react';

export const FormErrors = ({ formErrors }) => {
    return <section className='form-errors'>
                {Object.keys(formErrors).map((error, i) => {
                    if (formErrors[error].length) {
                        return (
                            <p key={i}>{formErrors[error]}</p>
                        )
                    } else {
                        return '';
                    }
                })}
            </section>
}