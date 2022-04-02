import { useState } from "react";
import { StyledAtividade } from "./styles";
import { IoCheckbox } from "react-icons/io5";

export default function Atividades(props){

    const {titulo,sequencia,recorde,done,id} = props;
    const [feito,setFeito] = useState(false);

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
                <IoCheckbox className="checkbox feito" onClick={()=>{setFeito(!feito)}}/> 
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
                <IoCheckbox className="checkbox naoFeito" onClick={()=>{setFeito(!feito)}}/> 
            </StyledAtividade>
        )
    }

}