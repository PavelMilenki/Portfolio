import React from 'react';
import s from './Footer.module.css'
import Title from "../Title/Title";
import fLogo from "../Images/facebook_icon2.png"
import gLogo from "../Images/github-icon2.png"
import tLogo from "../Images/Telegram_Logo.png"
import Contacts from "./Contacts";


export const Footer = () => {

    const contacts = [
        {
            id: 1,
            title: 'facebook',
            img: fLogo,
            link: 'https://www.facebook.com/pavel.milenki'
        },
        {
            id: 2,
            title: 'Telegram',
            img: tLogo,
            link: 'https://t.me/Pavel_Milenki'
        },
        {
            id: 3,
            title: 'Github',
            img: gLogo,
            link: 'https://github.com/Anekens'
        }
    ];

    return (
        <div className={s.footer}>
            <div className={s.container}>
                <Title title={'Pavel Milenki'}/>
                <div className={s.socialBlock}>
                    {contacts.map(c => {
                        return <Contacts key={c.id} title={c.title} img={c.img} link={c.link}/>
                    })}
                </div>
                <span className={s.access}>@2019 Pavel Milenki </span>
            </div>
        </div>
    );
};

export default Footer;
