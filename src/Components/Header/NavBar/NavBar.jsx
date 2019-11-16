import React from 'react';
import s from './NavBar.module.css'
import NavLinks from "./NavLinks";


export const NavBar = () => {

    const links = [
        {
            id: 1,
            title: 'Main',
            link: '#',
            target: ''
        },
        {
            id: 2,
            title: 'Skills',
            link: '#skills',
            target: ''
        },
        {
            id: 3,
            title: 'My works',
            link: '#works',
            target: ''
        },
        {
            id: 4,
            title: 'Contact me',
            link: '#contacts',
            target: ''
        },
        {
            id: 4,
            title: 'Resume',
            link: 'https://jobs.tut.by/',
            target: '_blank'
        }
    ];
    return (
        <div className={s.nav}>
            {links.map(p => {
                return <NavLinks key={p.id} title={p.title} link={p.link} target={p.target}/>
            })}
        </div>
    );
};

export default NavBar;
