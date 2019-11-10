import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MainInfo from "./Components/MainInfo/MainInfo";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";


export const App = () => {
    return (
        <div className="App">
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
