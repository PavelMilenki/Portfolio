import React from 'react';
import s from './Contacts.module.css'
import Title from "../Title/Title";
import Form from "./Form";
import Fade from "react-reveal/Fade";
import ContactForm from "./ContactForm";


export const Contacts = () => {
    return (
        <div className={s.contacts} id={'contactMe'}>
            <Fade bottom>
                <div className={s.container}>
                    <Title title={'contact me'}/>
                    <ContactForm/>
                </div>
            </Fade>
        </div>
    );
};

export default Contacts;
