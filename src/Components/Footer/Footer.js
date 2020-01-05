import React from 'react';
import s from './Footer.module.css'
import Title from "../Title/Title";
import facebookLogo from "../Images/facebookLogo.png"
import githubLogo from "../Images/githubLogo.png"
import telegramLogo from "../Images/telegramLogo.png"
import jobsTutLogo from "../Images/jobsTutLogo.png"
import linkedinLogo from "../Images/linkedInLogo.png"
import Contacts from "./Contacts";
import Fade from "react-reveal/Fade";


export const Footer = () => {

    const contacts = [
        {
            id: 1,
            title: 'linkedin',
            img: linkedinLogo,
            link: 'https://www.linkedin.com/in/pavel-milenki-34b969197/'
        },
        {
            id: 2,
            title: 'facebook',
            img: facebookLogo,
            link: 'https://www.facebook.com/pavel.milenki'
        },
        {
            id: 3,
            title: 'Telegram',
            img: telegramLogo,
            link: 'https://t.me/Pavel_Milenki'
        },
        {
            id: 4,
            title: 'Github',
            img: githubLogo,
            link: 'https://github.com/PavelMilenki'
        },
        {
            id: 5,
            title: 'JobsTutBy',
            img: jobsTutLogo,
            link: 'https://jobs.tut.by/resume/d65f844cff0782a7fb0039ed1f5a53626e5166'
        }
    ];

    return (
        <div className={s.footer}>
            <Fade top>
                <div className={s.container}>
                    <Title title={'Pavel Milenki'}/>
                    <div className={s.socialBlock}>
                        {contacts.map(c => {
                            return <Contacts key={c.id} title={c.title} img={c.img} link={c.link}/>
                        })}
                    </div>
                    <span className={s.access}>@2019 All Rights Reserved</span>
                </div>
            </Fade>
        </div>
    );
};

export default Footer;
