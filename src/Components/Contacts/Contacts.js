import React from 'react';
import s from './Contacts.module.css'
import Title from "../Title/Title";

function Contacts() {
    return (
        <div className={s.contacts}>
           <div className={s.container}>
               <Title title={'Контакты'}/>
               <form className={s.formWrapper}>
                   <input className={s.formArea} placeholder='Имя' type="text"/>
                   <input className={s.formArea} placeholder='e-mail' type="text"/>
                   <textarea className={s.messageArea} placeholder='Сообщение' type='submit' cols="10" rows="10"></textarea>
                   <button className={s.btnSubmit} type='submit'>Отправить</button>
               </form>
           </div>
        </div>
    );
}

export default Contacts;
