import React from 'react';
import s from './NavBar.module.scss'
import NavLinks from "./NavLinks";



export const NavBar = () => {

    const links = [
        {
            id: 1,
            title: 'about',
            link: 'main'
        },
        {
            id: 2,
            title: 'stack',
            link: 'skills'
        },
        {
            id: 3,
            title: 'portfolio',
            link: 'works'
        },
        {
            id: 4,
            title: 'contact',
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
