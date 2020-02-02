import React from 'react';
import s from './Contacts.module.scss'

const ContactForm = React.memo(({
                                    loading, name, email, message,
                                    setName, setEmail, setMessage,
                                    setNewMessage, disabled, error
                                }) => {
    let style = {color: '#CA5A12'};
    if (error === "Message send") {
        style = {color: 'green'}
    }

    return (
        <div className={s.formWrapper}>
            <legend className={s.legend}>
                {loading
                    ? <div style={style}> {error}</div>
                    : <div>Send your message</div>
                }
            </legend>
            <input className={s.formArea}
                   placeholder={'Fill with your name'}
                   value={name}
                   onChange={e => setName(e.currentTarget.value)}/>
            <input type="email"
                   className={s.formArea}
                   placeholder={'Your email address'}
                   value={email}
                   onChange={e => setEmail(e.currentTarget.value)}
                   required/>
            <textarea className={s.messageArea}
                      placeholder={'Write your awesome message :)'}
                      value={message}
                      onChange={e => setMessage(e.currentTarget.value)}/>
            <button onClick={setNewMessage}
                    className={s.btnSubmit}
                    disabled={disabled}>submit your message
            </button>
        </div>
    )
});

export default ContactForm;