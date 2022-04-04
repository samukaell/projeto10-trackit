import { IoCheckbox } from "react-icons/io5";
import { StyledMain } from "./styles";

export default function Habito(props){
    const {name,done} = props

    if(done){
        return(
            <StyledMain>
                <p className="name feito">{name}</p>
                <IoCheckbox className="checkbox feito"/>
            </StyledMain>
        )
    }else{
        return(
            <StyledMain>
                <p className="name naoFeito">{name}</p>
                <IoCheckbox className="checkbox naoFeito"/>
            </StyledMain>
        )
    }
}