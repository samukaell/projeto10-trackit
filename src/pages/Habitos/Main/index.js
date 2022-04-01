import SubTopo from "../../../components/SubTopo";
import CriarHabito from "../CriarHabito";
import { useState } from "react";
import {StyledMain} from './styles'

export default function Main(){
    const [add,setAdd] = useState(false);
    const [habitos,setHabitos] = useState([]);

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
                            habitos = {habitos}
                            setHabitos = {(novoHabito)=>{setHabitos([...habitos, novoHabito])}}

                        /> 
                    : null
            }
            </div>
            <div className="habitos-feitos">
            {habitos}
            </div>

            <p className="info">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </StyledMain>
    );
}