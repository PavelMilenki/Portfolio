import React from 'react';
import s from './Contacts.module.css'


export const Form = () => {
    return (
        <form className={s.formWrapper} action={''} id={'contactForm'}>
            <legend>Send your message</legend>
            <input className={s.formArea}
                   placeholder={'Name'}
                   type={'text'}
                   name={'name'}
                   id={'name'}/>
            <input className={s.formArea}
                   placeholder={'E-mail'}
                   type={'text'}
                   name={'email'}
                   id={'email'}/>
            <textarea className={s.messageArea}
                      placeholder={'Messages'}
                      name={'message'}>
                    </textarea>
            <input className={s.btnSubmit} type={'submit'} value={'Send'}/>
        </form>
    );
};

export default Form;
