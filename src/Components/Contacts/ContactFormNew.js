import React from 'react';
import s from './Contacts.module.css'

const ContactFormNew = React.memo(({
                                       loading, name, email, message,
                                       setName, setEmail, setMessage,
                                       setNewMessage, disabled, error
                                   }) => {
    let style = {color: 'red'};
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
                   placeholder={'Name'}
                   value={name}
                   onChange={e => setName(e.currentTarget.value)}/>
            <input type="email"
                   className={s.formArea}
                   placeholder={'E-mail'}
                   value={email}
                   onChange={e => setEmail(e.currentTarget.value)}
                   required/>
            <textarea className={s.messageArea}
                      placeholder={'Message'}
                      value={message}
                      onChange={e => setMessage(e.currentTarget.value)}/>
            <button onClick={setNewMessage}
                    className={s.btnSubmit}
                    disabled={disabled}>Send
            </button>
        </div>
    )
});

export default ContactFormNew;