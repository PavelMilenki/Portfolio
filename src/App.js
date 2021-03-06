import React from 'react';
import s from "./App.module.css";
import Header from "./Components/Header/Header";
import MainInfo from "./Components/MainInfo/MainInfo";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contacts from "./Components/Contacts/Contacts";
import Particles from 'react-particles-js';
import {Provider} from "react-redux";
import store from "./redux/store";


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
            <Provider store={store}>
                <Particles className={s.particles}
                           params={particlesOpt}/>
                <Header/>
                <MainInfo/>
                <Skills/>
                <Projects/>
                <Contacts/>

            </Provider>
        </div>
    );
};

export default App;
