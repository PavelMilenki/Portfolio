import React, {useState} from 'react';
import s from './Header.module.scss'
import NavBar from "./NavBar/NavBar";
import {Slider} from 'react-burgers'


export const Header = () => {
    let [editMode, setEditMode] = useState(false);

    const changeEditMode = () => {
        if (editMode === false) {
            setEditMode(true);
        }
        if (editMode === true) {
            setEditMode(false);
        }
    };

    return (
        <div className={s.header}>
            <div className={s.container}>
                {editMode && <NavBar/>}
                <Slider color='#8a8a8a'
                        active={editMode}
                        onClick={changeEditMode}
                        lineSpacing={8}
                        lineHeight={4}
                        width={40}/>
            </div>
        </div>
    );
};

export default Header;
