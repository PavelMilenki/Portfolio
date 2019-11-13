import React from 'react';
import s from './Contacts.module.css'
import Title from "../Title/Title";
import Form from "./Form";


export const Contacts = () => {
    return (
        <div className={s.contacts} id={'contacts'}>
            <div className={s.container}>
                <Title title={'contacts'}/>
                <Form/>
            </div>
        </div>
    );
};

export default Contacts;
