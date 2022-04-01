import { useContext } from "react";
import LogadoContext from "../../util/LogadoContext";
import Header from "../../components/Header";
import Main from "./Main";
import Footer from "../../components/Footer";

export default function Habitos(){

    const {login} = useContext(LogadoContext)

    return (
        <>
            <Header
                fotoUser = {login.image}
                nome = {login.name}
            />
            <Main/>
            <Footer/>
        </>
    );
}