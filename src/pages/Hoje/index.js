import { useState,useContext } from "react";
import LogadoContext from "../../util/LogadoContext";
import Header from "../../components/Header";
import Main from './Main'
import Espaco from '../../components/Espaco'
import Footer from "../../components/Footer";


export default function Hoje(){

    const {login} = useContext(LogadoContext)
    const [atualizar,setAtualizar] = useState(true);

    return(
        <>
            <Header
                fotoUser ={login.image}
                nome = {login.name}
            />
            <Main
                atualizar ={atualizar}
                setAtualizar = {setAtualizar}
            />
            <Espaco/>
            <Footer
                atualizar = {atualizar}
            />
        </>
    )
}