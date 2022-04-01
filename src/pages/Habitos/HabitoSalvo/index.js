import { IoTrashOutline } from "react-icons/io5";
import { StyledHabito } from "./styles";

export default function HabitoSalvo(props){

    const {titulo,listaSelecionado} = props;
    const diaSemana = ['D','S','T','Q','Q','S','S'];

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
        console.log("Deveria valer->",listaSelecionado);
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

    return(
        <StyledHabito>
                <div className="conatiner">
                    <div className="caixa-titulo">
                        <p>{titulo}</p>
                        <IoTrashOutline className="icone-lixo"/>
                    </div>
                    <div className="caixa-dias">
                        {rederizarDias()}
                    </div>
                </div>
        </StyledHabito>
    );
}