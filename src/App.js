import React from 'react';
import s from "./App.module.css";
import Header from "./Components/Header/Header";
import MainInfo from "./Components/MainInfo/MainInfo";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Particles from 'react-particles-js';


export const App = () => {
    const particlesOpt = {
        particles: {
            number: {
                value: 150,
                density: {
                    enable: true,
                    value_area: 800
                }
            }
        }
    };
    return (
        <div className={s.app}>
            <Particles className={s.particles}
                       params={particlesOpt}/>
            <Header/>
            <MainInfo/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

export default App;
