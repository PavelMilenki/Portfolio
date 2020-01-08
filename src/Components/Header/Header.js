import React, {useState} from 'react';
import s from './Header.module.css'
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
                <Slider color='#fff'
                        active={editMode}
                        onClick={changeEditMode}
                        lineSpacing={6}
                        lineHeight={3}
                        width={30}/>
            </div>
        </div>
    );
};

export default Header;
