import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LogadoContext from "../util/LogadoContext";

//Telas
import TelaInicio from "../pages/TelaInicio"
import TelaCadastro from "../pages/TelaCadastro";
import Habitos from "../pages/Habitos";
import Hoje from "../pages/Hoje";
import Historico from "../pages/Historico";

export default function App(){

   const [login,setLogin] = useState({
        name: null,
        image: null,
        token: null
   });
    return (
        <>
        <LogadoContext.Provider value={{login,setLogin}}>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<TelaInicio/>}/>
                        <Route path="/cadastro" element={<TelaCadastro/>}/>
                        <Route path="/habitos" element={<Habitos/>}/>
                        <Route path="/hoje" element={<Hoje/>}/>
                        <Route path="/historico" element={<Historico/>}/>
                </Routes>
            </BrowserRouter>    
        </LogadoContext.Provider>
        </>
    )
}