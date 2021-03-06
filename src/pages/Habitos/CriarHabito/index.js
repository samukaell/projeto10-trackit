import { useState } from "react";
import { postHabito } from "../../../service";
import { useContext } from 'react';
import LogadoContext from '../../../util/LogadoContext';
import {ThreeDots} from 'react-loader-spinner'
import Dia from "./Dia";

import { StyledHabito } from "./styles";

export default function CriarHabito(props){
    //Para criação dos dias
    const diaSemana = ['D','S','T','Q','Q','S','S'];
    //Salvar o habito
    const {add,setAdd} = props;    
    //Atualizar habitos
    const {atualizar,setAtualizar} = props;
    //Partes habito
    const [nomeHabito,setNomeHabito] = useState("");
    const [diasHabito,setDiasHabito] = useState([]);
    //Habilitar Botao
    const [habilitar,setHabilitar] = useState(false);
    //token
    const { login } = useContext(LogadoContext);

    async function salvar(){   
        if(nomeHabito !== ""){
            setHabilitar(!habilitar);
            //chamar o post 
            const retorno = await postHabito({name: nomeHabito,days: diasHabito},login.token);
            if(retorno !== null){
                setHabilitar(!habilitar);
                setAdd(!add);
                setAtualizar(!atualizar);
            }else{
                alert("Ops, ocorreu um erro, por favor tente novamenete!");
            }
        }
    }

    return(
        <StyledHabito>
                <input placeholder="nome do hábito" required
                    value={nomeHabito} onChange={e => setNomeHabito(e.target.value)}
                />
                <div className="conatiner">
                    <div className="dias">
                        {diaSemana.map((dia,index)=>{
                            return (
                                <Dia 
                                    diasHabito = {diasHabito}
                                    setDiasHabito = {(diasHabito)=>{setDiasHabito(diasHabito)}}
                                    dia={dia} 
                                    key={index} 
                                    idDia={index}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="caixa-botoes">
                    <button className="cancelar" onClick={()=>{setAdd(!add)}}>Cancelar</button>
                    <button className="salvar" disabled={habilitar} onClick={()=>{salvar()}}>
                        {habilitar ? 
                            <ThreeDots color="#FFFFFF" height={30} width={30} />
                            : 
                            'Salvar'
                        }
                    </button>
                </div>
        </StyledHabito>
    );
}