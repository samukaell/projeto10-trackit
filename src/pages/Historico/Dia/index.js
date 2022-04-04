import Habito from "../Habito"
import { StyledMain } from './styles'

export default function Dia(props){
    const {data,habitos} = props

    return(
        <StyledMain>
            <div className="caixa-info">
                <p className="titulo">Dia {data}</p>
                <p className="subtitulo">Habitos:</p>
            </div>
            <div className="caixa-habitos">
                <div className="container">
                    {habitos.map(obj=>{
                        return (
                        <Habito
                            name = {obj.name}
                            done = {obj.done}
                            key = {obj.id}
                        />)
                    })}
                </div>
            </div>
            
        </StyledMain>
    )
}