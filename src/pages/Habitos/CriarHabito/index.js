import { StyledHabito } from "./styles";
import { useState } from "react";
import HabitoSalvo from '../HabitoSalvo'
import Dia from "./Dia";

export default function CriarHabito(props){
    //Para criação dos dias
    const diaSemana = ['D','S','T','Q','Q','S','S'];
    //Salvar o habito
    const {add,setAdd} = props;    
    const {habitos,setHabitos} = props;
    //Partes habito
    const [nomeHabito,setNomeHabito] = useState("");
    const [diasHabito,setDiasHabito] = useState([]);

    function salvar(){
        if(nomeHabito !== null){
            
            setHabitos(
                <HabitoSalvo
                    titulo={nomeHabito}
                    listaSelecionado={diasHabito}
                    key={nomeHabito+diasHabito[0]}
                />
            )
            
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
                    <button className="salvar" onClick={()=>{salvar()}}>Salvar</button>
                </div>
        </StyledHabito>
    );
}