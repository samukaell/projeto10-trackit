import { useState,useEffect,useContext } from 'react';
import LogadoContext from '../../../util/LogadoContext';
import ProgressoContext from '../../../util/ProgressoContext';
import { getHoje } from '../../../service';
import dayjs from 'dayjs'

import SubTopo from "../../../components/SubTopo"
import Atividades from "../Atividade"

import { StyledMain } from "./styled"

export default function Main(props){
    const {atualizar,setAtualizar} = props;
    const [habitos,setHabitos] = useState([]);
    const semana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'];

    //token 
    const { login } = useContext(LogadoContext);
    //Progresso
    const { progresso } = useContext(ProgressoContext);

    async function carregarHabitosHoje(){
        const retorno = await getHoje(login.token);
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
                    titulo={`${semana[dayjs().day()]}, ${dayjs().date()}/${dayjs().month()}`}
                    verde = {true}
                    subtitulo = {`${progresso}% dos hábitos concluídos`}
                />
            )
        }else{
            return(
                <SubTopo
                    ativo = {false}
                    titulo={`${semana[dayjs().day()]}, ${dayjs().date()}/${dayjs().month()}`}
                    verde = {false}
                    subtitulo = {'Nenhum hábito concluído ainda'}
                />
            )
        }
    }

    return(
        <StyledMain>
            {carregarProgresso()}
            {habitos.map(hoje=>{
                return(
                    <Atividades
                        titulo={hoje.name}
                        atualizar ={atualizar}
                        setAtualizar = {setAtualizar}
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