import React from 'react';
import './style/reset.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import MainComponent from "./component/MainComponent";
import { useTranslation } from "react-i18next";
localStorage.removeItem("i18nextLng");

const App = () => {
    const { t } = useTranslation();

    return (
        <div className="App">
            {/*<h1>{t("hello")}</h1>*/}
            <Routes>
                <Route path='/' element={<MainComponent/>}/>
            </Routes>
        </div>
    );
}

export default App;
