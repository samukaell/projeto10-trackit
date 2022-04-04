import { Link } from 'react-router-dom';
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useContext,useEffect } from 'react';
import LogadoContext from '../../util/LogadoContext';
import ProgressoContext from '../../util/ProgressoContext';
import { getHoje } from '../../service';

import { StyledFooter } from "./styles"


export default function Footer(props){   
    const {atualizar} = props;
    const dia = 'Hoje';

    //token 
    const { login } = useContext(LogadoContext);
    //progresso
    const { progresso,setProgresso } = useContext(ProgressoContext);

    async function carregarHabitosHoje(){
        const retorno = await getHoje(login.token);
        let valor = criarPorcentagem(retorno)
        setProgresso(valor);
    }

    function criarPorcentagem(list){
        let valor = 0;
        let total = list.length;
        list.map(obj=>{
            if(obj.done === true){
                valor = valor + 1;
            }
            return valor;
        });

        return Math.round((valor/total)*100);
    }

    useEffect(() => {
        carregarHabitosHoje();
    }, [atualizar]);
    

    return (
        <StyledFooter>
            <div className="caixa">
                <Link to={"/habitos"}>
                    <p>Hábitos</p>
                </Link>
                <Link to={"/hoje"}>
                    <div style={{ width: 91, height: 91 }}>
                        <CircularProgressbar
                            value={progresso}
                            text={dia}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                            })}
                        />
                    </div>
                </Link>
                <Link to={"/historico"}>
                    <p>Histórico</p>
                </Link>
            </div>
        </StyledFooter>
    )
}
/*
<div style={{ width: 91, height: 91 }}>
    <CircularProgressbar value={percentage} text={`${percentage}%`}/>
</div>
*/