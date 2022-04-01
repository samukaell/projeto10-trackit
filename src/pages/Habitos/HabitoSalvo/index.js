import { useContext } from 'react';
import LogadoContext from '../../../util/LogadoContext';
import { deleteHabito } from "../../../service";
import { IoTrashOutline } from "react-icons/io5";
import { StyledHabito } from "./styles";

export default function HabitoSalvo(props){

    const {titulo,listaSelecionado,idHabito} = props;
    const {atualizar,setAtualizar} = props;
    const diaSemana = ['D','S','T','Q','Q','S','S'];

    //token 
    const { login } = useContext(LogadoContext);

    function Dia(props){
        const {diaSelecionado,dia} = props;
        if(diaSelecionado){
            return (
                <p className="dia selecionado">
                        {dia}
                </p>
            )
        }else{
            return (
                <p className="dia naoSelecionado">
                        {dia}
                </p>
            )
        }
    }

    function rederizarDias(){
        let semana = [];
        diaSemana.map((dia,index)=>{
            if(listaSelecionado.includes(index)){
                semana.push(<Dia  dia={dia} diaSelecionado={true} key={index}/>)
            }else{
                semana.push(<Dia  dia={dia} diaSelecionado={false} key={index}/>)
            }
            return semana;
        });
        return semana;
    }

    async function deletar(){
        const retorno = await deleteHabito(login.token,idHabito);
        console.log("Deletar!",retorno);
        setAtualizar(!atualizar);
    }   

    return(
        <StyledHabito>
                <div className="conatiner">
                    <div className="caixa-titulo">
                        <p>{titulo}</p>
                        <IoTrashOutline className="icone-lixo" onClick={()=>{deletar()}}/>
                    </div>
                    <div className="caixa-dias">
                        {rederizarDias()}
                    </div>
                </div>
        </StyledHabito>
    );
}