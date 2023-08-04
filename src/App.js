import "./App.css";
import { useTranslation } from "react-i18next";
import ChooseItem from "./components/ChooseItem";
import Test1 from "./components/Test1";
import Test3 from "./components/Test3";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// import React, { useState } from "react";
import Home from "./components/Home";


function App() {
  const { t, i18n } = useTranslation();

  function languageChange(event) {
    console.log(event.target.value);
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div>
      <BrowserRouter>
      <Home t={t} languageChange={languageChange}/>
        <Routes>
          <Route path="/home" element={<Navigate to="/"/>}></Route>
          <Route path="/" element={<ChooseItem t={t}/>}></Route>
          <Route path="/test1" element={<Test1/>}></Route>
          <Route path="/test3" element={<Test3/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
