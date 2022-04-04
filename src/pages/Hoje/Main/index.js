import { useState,useEffect,useContext } from 'react';
import LogadoContext from '../../../util/LogadoContext';
import ProgressoContext from '../../../util/ProgressoContext';
import { getHoje } from '../../../service';
import dayjs from 'dayjs'

import SubTopo from "../../../components/SubTopo"
import Atividades from "../Atividade"

import { StyledMain } from "./styled"

export default function Main(){

    const [habitos,setHabitos] = useState([]);
    const [atualizar,setAtualizar] = useState(true);

    //token 
    const { login } = useContext(LogadoContext);
    //Progresso
    const { progresso } = useContext(ProgressoContext);

    async function carregarHabitosHoje(){
        const retorno = await getHoje(login.token);
        console.log("Habitos de hoje ->:",retorno);
        setHabitos(retorno);
    }

    useEffect(() => {
        carregarHabitosHoje();
    }, [atualizar]);

    function carregarProgresso(){
        if(progresso > 0){
            return(
                <SubTopo
                    ativo = {false}
                    titulo={`${"Talvez seja Segunda"}, ${dayjs().date()}/${dayjs().month()}`}
                    verde = {true}
                    subtitulo = {`${progresso}% dos hábitos concluídos`}
                />
            )
        }else{
            <SubTopo
                    ativo = {false}
                    titulo={`${"Talvez seja Segunda"}, ${dayjs().date()}/${dayjs().month()}`}
                    verde = {false}
                    subtitulo = {'Nenhum hábito concluído ainda'}
                />
        }
    }

    let dia = dayjs().toDate().date;
    console.log("Days ->: ", dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A'));

    return(
        <StyledMain>
            {carregarProgresso()}
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