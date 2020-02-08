import React, {useState} from 'react';
import s from './Contacts.module.scss'
import {AwesomeButtonSocial} from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import {useDispatch, useSelector} from "react-redux";
import {contactFormSend, messageError, messageLoading} from "../../redux/contactFormReducer";
import ContactForm from "./ContactForm";
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
            <div className={s.container}>
                <div>
                    <h2>Get in touch</h2>
                </div>
                <div className={s.description}>
                    If you wanna get in touch, talk to me about a project or job or just say hi, fill up the
                    awesome form below or send an email to
                    <span className={s.email}> p.milenkii@gmail.com</span> and ~let's talk.

                </div>
                <ContactForm loading={loading}
                             name={name}
                             email={email}
                             message={message}
                             setName={setName}
                             setEmail={setEmail}
                             setMessage={setMessage}
                             setNewMessage={setNewMessage}
                             disabled={disabled}
                             error={error}/>
                <div className={s.socialTitle}>Let's get social</div>
                <div className={s.socialTitle}>
                    Follow my online page on Facebook and profiles on, GitHub and Linkedin.
                </div>
                <div className={s.socialBlock}>
                    <AwesomeButtonSocial
                        cssModule={AwesomeButtonStyles}
                        type='facebook'
                        href='https://www.facebook.com/pavel.milenki'
                        target='_blank'>
                        Facebook
                    </AwesomeButtonSocial>
                    <AwesomeButtonSocial
                        cssModule={AwesomeButtonStyles}
                        type='linkedin'
                        href='https://www.linkedin.com/in/pavel-milenki-34b969197/'
                        target='_blank'>
                        Linkedin
                    </AwesomeButtonSocial>
                    <AwesomeButtonSocial
                        cssModule={AwesomeButtonStyles}
                        type='github'
                        href='https://github.com/PavelMilenki'
                        target='_blank'>
                        Github
                    </AwesomeButtonSocial>
                </div>
            </div>
        </div>
    );
});

export default Contacts;
