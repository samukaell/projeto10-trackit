import { useState } from "react"

import Login from "../../../components/Login"

export default function Main(){

    const [login,setLogin] = useState("");
    const [senha,setSenha] = useState("");
    

    return (
        <>
            <Login
                cadastro = {false}
                login = {login}
                definirLogin = {(login)=>{setLogin(login)}}
                senha = {senha}
                definirSenha= {(senha)=>{setSenha(senha)}}
            />
        </>
    )
}