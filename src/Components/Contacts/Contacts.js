import React, {useState} from 'react';
import s from './Contacts.module.css'
import Title from "../Title/Title";
import Fade from "react-reveal/Fade";
import {useDispatch, useSelector} from "react-redux";
import {contactFormSend, messageError, messageLoading} from "../../redux/contactFormReducer";
import ContactFormNew from "./ContactFormNew";
import {emailValidator} from "../../Helpers/emailValidator";


export const Contacts = React.memo(() => {
    const {loading, error} = useSelector((store) => store.contactForm);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [disabled, setDisabled] = useState(false);

    const setNewMessage = () => {
        if (name === "") {
            dispatch(messageError('Set  your name'));
        } else if (email === "") {
            dispatch(messageError('Set  your E-mail'));
        } else if (!emailValidator(email)) {
            dispatch(messageError('E-mail not correct'));
        } else if (message === "") {
            dispatch(messageError('Set  your message'));
        } else {
            setDisabled(false);
            dispatch(contactFormSend(name, email, message));
            setName("");
            setEmail("");
            setMessage("");
            dispatch(messageError('Message send'));
            setTimeout(() => {
                dispatch(messageLoading(false));
            }, 5000);
        }
    };

    return (
        <div className={s.contacts} id={'contactMe'}>
            <Fade bottom>
                <div className={s.container}>
                    <Title title={'contact me'}/>
                    <ContactFormNew loading={loading}
                                    name={name}
                                    email={email}
                                    message={message}
                                    setName={setName}
                                    setEmail={setEmail}
                                    setMessage={setMessage}
                                    setNewMessage={setNewMessage}
                                    disabled={disabled}
                                    error={error}/>
                </div>
            </Fade>
        </div>
    );
});

export default Contacts;
