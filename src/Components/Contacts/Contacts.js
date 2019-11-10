import React from 'react';
import s from './Contacts.module.css'
import Title from "../Title/Title";

export const Contacts = () => {
    return (
        <div className={s.contacts} id={'contacts'}>
            <div className={s.container}>
                <Title title={'contacts'}/>
                <form className={s.formWrapper}>
                    <input className={s.formArea} placeholder='Name' type="text"/>
                    <input className={s.formArea} placeholder='E-mail' type="text"/>
                    <textarea className={s.messageArea} placeholder='Messages' ></textarea>
                    <button className={s.btnSubmit} type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;
