import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginContext } from './Contexts/LoginComponent'

import GlobalStyle from "./components/globalStyles";
import FirstPage from "./components/FirstPage";
import Register from "./components/Register";
import Habits from "./components/Habits"

import Historico from "./components/Historico"

export default function App() {
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [userName,setUserName] = React.useState("");
    const [image,setImage] = React.useState('');
    const [token,setToken] = React.useState('');

    return (
        <LoginContext.Provider value={{email,setEmail,password,setPassword,userName,setUserName,image,setImage,token,setToken}}>            
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FirstPage />} />
                    <Route path="/cadastro" element={<Register />} />
                    <Route path="/habitos" element={<Habits />} />
                    <Route path="/historico" element={<Historico />} />
                </Routes>
            </BrowserRouter>
        </LoginContext.Provider>
    )
}
