import { useState,useEffect,useContext } from 'react';
import LogadoContext from '../../../util/LogadoContext';
import { getHoje } from '../../../service';
import SubTopo from "../../../components/SubTopo"
import Atividades from "../Atividade"

import { StyledMain } from "./styled"

export default function Main(){

    const [habitos,setHabitos] = useState([]);
    const [atualizar,setAtualizar] = useState(true);
    //token 
    const { login } = useContext(LogadoContext);

    async function carregarHabitosHoje(){
        const retorno = await getHoje(login.token);
        console.log("Habitos de hoje ->:",retorno);
        setHabitos(retorno);
    }

    useEffect(() => {
        carregarHabitosHoje();
    }, [atualizar]);

    return(
        <StyledMain>
            <SubTopo
                ativo = {false}
                titulo={"Segunda, 17/05"}
                subtitulo = {"Nenhum hábito concluído ainda"}
            />
            {habitos.map(hoje=>{
                return(
                    <Atividades
                        titulo={hoje.name}
                        sequencia = {hoje.currentSequence}
                        recorde = {hoje.highestSequence}
                        done={hoje.done}
                        id={hoje.id}
                        key={hoje.id}
                    />
                )
            })}
        </StyledMain>
    )
}