import { useState } from "react";

export default function Dia(props){
    const [diaSelecionado,setDiaSelecionado] = useState(false);
    const {dia,idDia,diasHabito,setDiasHabito} = props;

    function salvarDias(){
        const listaAuxiliar = [];
        let diaIgual = false;
        diasHabito.map(dia=>{
            if(dia == idDia){
                diaIgual = true;
            }else{
                listaAuxiliar.push(dia);
            }
            return diaIgual;
        });

        if(diaIgual){
            setDiasHabito([...listaAuxiliar]);
        }else{
            listaAuxiliar.push(idDia);
            setDiasHabito([...listaAuxiliar]);
        }

    }

        
        function selecionar(){
            setDiaSelecionado(!diaSelecionado);
            console.log("Dias selecionados ->",diasHabito);
            salvarDias();
        }


        if(diaSelecionado){
            return (
                <p className="dia selecionado" 
                    onClick={()=>{selecionar()}}>
                        {dia}
                </p>
            )
        }else{
            return (
                <p className="dia naoSelecionado" 
                    onClick={()=>{selecionar()}}>
                        {dia}
                </p>
            )
        }
    
}