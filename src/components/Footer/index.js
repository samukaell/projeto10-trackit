import { Link } from 'react-router-dom';
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { StyledFooter } from "./styles"

export default function Footer(){
    const dia = 'Hoje';
    const percentage = 66;

    return (
        <StyledFooter>
            <div className="caixa">
                <Link to={"/habitos"}>
                    <p>Hábitos</p>
                </Link>
                <Link to={"/hoje"}>
                    <div style={{ width: 91, height: 91 }}>
                        <CircularProgressbar
                            value={percentage}
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