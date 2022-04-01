import SubTopo from "../../../components/SubTopo";
import CriarHabito from "../CriarHabito";
import HabitoSalvo from "../HabitoSalvo"
import { useState,useEffect,useContext } from "react";
import LogadoContext from '../../../util/LogadoContext';
import { getHabitos } from "../../../service";
import {StyledMain} from './styles'


export default function Main(){
    const [add,setAdd] = useState(false);
    const [atualizar,setAtualizar] = useState(true);
    const [habitos,setHabitos] = useState([]);

    //token 
    const { login } = useContext(LogadoContext);

    async function carregarHabitos(){
        const retorno = await getHabitos(login.token);
        console.log("Habitos carregados:",retorno);
        setHabitos(retorno);
    }

    useEffect(() => {
        carregarHabitos();
    }, [atualizar]);

    return (
        <StyledMain>
            <SubTopo
                titulo = {'Meus Hábitos'}
                ativo = {true}
                add = {add}
                setAdd = {setAdd}
            />
            <div className="caixa-habitos">
            {
                add ?   <CriarHabito 
                            add={add} 
                            setAdd = {setAdd} 
                            atualizar = {atualizar}
                            setAtualizar = {setAtualizar}

                        /> 
                    : null
            }
            </div>
            <div className="habitos-feitos">
            {habitos.map(habito=>{
                return (
                    <HabitoSalvo
                        titulo = {habito.name}
                        listaSelecionado = {habito.days}
                        idHabito = {habito.id}
                        atualizar = {atualizar}
                        setAtualizar = {setAtualizar}
                        key={habito.id}
                    />
                )
            })}
            </div>

            <p className="info">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </StyledMain>
    );
}