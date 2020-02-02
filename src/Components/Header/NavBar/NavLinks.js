import React from 'react';
import s from './NavBar.module.scss'
import {Link} from "react-scroll";

export const NavLinks = (props) => {
    return (
        <div className={s.item}>
            <Link to={props.link}
                  className={s.activeLink}
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={1300}>
                {props.title}
            </Link>
        </div>
    );
};

export default NavLinks;
