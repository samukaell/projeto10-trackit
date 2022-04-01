import SubTopo from "../../../components/SubTopo";
import {StyledMain} from './styles'


export default function Main(){
    console.log("Historico!");
    return (
        <StyledMain>
            <SubTopo
                ativo = {false}
                titulo={"Histórico"}
            />
            <p className="info">Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </StyledMain>
    )
}