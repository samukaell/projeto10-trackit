import { useEffect,useState,useContext } from 'react';
import LogadoContext from '../../../util/LogadoContext';
import { getHistorico } from '../../../service';
import Dia from '../Dia'
import Espaco from '../../../components/Espaco'
import SubTopo from "../../../components/SubTopo";
import {StyledMain} from './styles'



export default function Main(){

    const [historico,setHistorico] = useState([{day:null,habits:[{name:null,done:null}]}]);
    const [atualizado,setAtualizado] = useState(false);

    //token 
    const { login } = useContext(LogadoContext);

    async function carregarHistorico(){
        const retorno = await getHistorico(login.token);
        setHistorico(retorno);
        setAtualizado(true);
    }

    useEffect(() => {
        carregarHistorico();
    }, []);


    return (
        <StyledMain>
            <SubTopo
                ativo = {false}
                titulo={"Histórico"}
            />
            <div className='container'>
                { atualizado ? 
                    historico.map(dia=>{
                    return(<Dia
                            data = {dia.day}
                            habitos = {dia.habits}
                            key={dia.day}
                        />)
                    })   
                    :
                    <p className="info">Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                }
            </div>
            <Espaco/>
        </StyledMain>
    )
}