import {StyledMain} from './styles'
import { IoAddOutline } from "react-icons/io5";

export default function SubTopo(props){

    const {titulo,subtitulo,add,setAdd,ativo} = props;

    if(ativo){
        return(
            <StyledMain>
                <div className="titulo-habitos">
                    <p className="titulo">{titulo}</p>
                    <IoAddOutline className="icone-add" onClick={()=>{setAdd(!add)}}/>
                </div>
                <p className='subtitulo'>{subtitulo}</p>
            </StyledMain>
        );
    }else{
        return(
            <StyledMain>
                <div className='container'>
                    <div className="titulo-habitos">
                        <p className="titulo">{titulo}</p>
                    </div>
                    <p className='subtitulo'>{subtitulo}</p>
                </div>
            </StyledMain>
        );
    }
}