import React from 'react';
import s from './NavBar.module.css'
import NavLinks from "./NavLinks";


export const NavBar = () => {

    const links = [
        {
            id: 1,
            title: 'Main',
            link: 'main'
        },
        {
            id: 2,
            title: 'Skills',
            link: 'skills'
        },
        {
            id: 3,
            title: 'My works',
            link: 'works'
        },
        {
            id: 4,
            title: 'Contact me',
            link: 'contactMe'
        }
    ];
    return (
        <div className={s.nav}>
            {links.map(p => {
                return <NavLinks key={p.id} title={p.title} link={p.link}/>
            })}
        </div>
    );
};

export default NavBar;
