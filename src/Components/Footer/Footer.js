import React from 'react';
import s from './Footer.module.css'
import Title from "../Title/Title";
import facebookLogo from "../Images/facebookLogo.png"
import githubLogo from "../Images/githubLogo.png"
import telegramLogo from "../Images/telegramLogo.png"
import jobsTutLogo from "../Images/jobsTutLogo.png"
import Contacts from "./Contacts";


export const Footer = () => {

    const contacts = [
        {
            id: 1,
            title: 'facebook',
            img: facebookLogo,
            link: 'https://www.facebook.com/pavel.milenki'
        },
        {
            id: 2,
            title: 'Telegram',
            img: telegramLogo,
            link: 'https://t.me/Pavel_Milenki'
        },
        {
            id: 3,
            title: 'Github',
            img: githubLogo,
            link: 'https://github.com/Anekens'
        },
        {
            id: 4,
            title: 'JobsTutBy',
            img: jobsTutLogo,
            link: 'https://jobs.tut.by/'
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
