import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Register from "./components/Register";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/cadastro" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}