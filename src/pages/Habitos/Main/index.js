import { IoAddOutline } from "react-icons/io5";
import {StyledMain} from './styles'

export default function Main(){
    return (
        <StyledMain>
            <div className="titulo-habitos">
                <p className="titulo">Meus hábitos</p>
                <IoAddOutline className="icone-add" />
            </div>
            <p className="info">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </StyledMain>
    );
}