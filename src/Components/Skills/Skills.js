import React from 'react';
import s from './Skills.module.css'
import Title from "../Title/Title";
import Skill from "./Skill";
import cssLogo from "../Images/cssLogo.png"
import jsLogo from "../Images/jsLogo.png"
import reactLogo from "../Images/reactLogo.png"
import reduxLogo from "../Images/reduxLogo.png"
import googleLogo from "../Images/googleLogo.png"
import html5Logo from "../Images/html5Logo.png"

export const Skills = () =>  {

    const skills = [
        {
            id: 1,
            icon: html5Logo,
            title: 'HTML5',
            description: 'Some description'
        },
        {
            id: 2,
            icon: cssLogo,
            title: 'CSS3',
            description: 'Some description'
        },
        {
            id: 3,
            icon: jsLogo,
            title: 'JavaScript',
            description: 'Some description'
        },
        {
            id: 4,
            icon: reactLogo,
            title: 'React',
            description: 'Some description'
        },
        {
            id: 5,
            icon: reduxLogo,
            title: 'Redux',
            description: 'Some description'
        },
        {
            id: 6,
            icon: googleLogo,
            title: 'Google',
            description: 'Some description'
        }
    ];

    return (
        <div className={s.skills} id={'skills'}>
            <div className={s.container}>
                <Title title={'my skills'}/>
                <div className={s.skillsWrapper}>
                    {skills.map(skill => {
                        return <Skill key={skill.id} icon={skill.icon} title={skill.title}
                                          description={skill.description} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
