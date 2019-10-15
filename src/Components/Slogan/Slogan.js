import React from 'react';
import s from './Slogan.module.css'
import Title from "../Title/Title";

function Slogan() {
    return (
        <div className={s.slogan}>
            <div className={s.container}>
                <Title title={'Рассматриваю варианты работы'}/>
                <div>
                    <button className={s.button}>Нанять меня</button>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
