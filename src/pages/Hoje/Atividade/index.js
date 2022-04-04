import { useState } from "react";
import { useContext } from 'react';
import LogadoContext from '../../../util/LogadoContext';
import { postDone,postNotDone } from "../../../service";

import { StyledAtividade } from "./styles";
import { IoCheckbox } from "react-icons/io5";

export default function Atividades(props){
    //token
    const { login } = useContext(LogadoContext);

    const {titulo,sequencia,recorde,done,id} = props;
    const [feito,setFeito] = useState(done);

    async function estaFeito(){
        const retorno = await postDone(login.token,id);
        console.log("ID->"+id+"Token->"+login.token);
        setFeito(!feito);
    }

    async function naoEstaFeito(){
        const retorno = await postNotDone(login.token,id);
        console.log("ID->"+id+"Token->"+login.token);
        setFeito(!feito);
    }

    console.log("Done ->",done);

    if(feito){
        return(
            <StyledAtividade>
                <div className="caixa-info">
                    <p className="titulo">{titulo}</p>
                    <div className="caixa-p">
                        <p className="subtitulo">Sequência atual: </p>
                        <p className="feito"> {sequencia} dias</p>
                    </div>
                    <div className="caixa-p">
                        <p className="subtitulo">Sequência atual: </p>
                        <p className="feito"> {recorde} dias</p>
                    </div>
                </div>
                <IoCheckbox className="checkbox feito" onClick={()=>{naoEstaFeito()}}/> 
            </StyledAtividade>
        );
    }else{
        return(
            <StyledAtividade>
                <div className="caixa-info">
                    <p className="titulo">{titulo}</p>
                    <div className="caixa-p">
                        <p className="subtitulo">Sequência atual: </p>
                        <p className="naoFeito"> {sequencia} dias</p>
                    </div>
                    <div className="caixa-p">
                        <p className="subtitulo">Sequência atual: </p>
                        <p className="naoFeito">{ recorde} dias</p>
                    </div>
                </div>
                <IoCheckbox className="checkbox naoFeito" onClick={()=>{estaFeito()}}/> 
            </StyledAtividade>
        )
    }

}