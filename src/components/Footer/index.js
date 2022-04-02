import { Link } from 'react-router-dom';
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { StyledFooter } from "./styles"

export default function Footer(props){
    
    const {porcentagem} = props;

    const dia = 'Hoje';

    return (
        <StyledFooter>
            <div className="caixa">
                <Link to={"/habitos"}>
                    <p>Hábitos</p>
                </Link>
                <Link to={"/hoje"}>
                    <div style={{ width: 91, height: 91 }}>
                        <CircularProgressbar
                            value={porcentagem}
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