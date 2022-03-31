
import {StyledHeader} from './styles';
import logo from '../../midia/TrackIt.png';


export default function Header(props){

    const {fotoUser,nome} = props;

    return(
        <StyledHeader>
            <div className='caixa'>
                <img className='foto-logo' src={logo} alt="Logo"/>
                <img className='foto-user' src={fotoUser} alt={"imagem do usuario"+nome}/>
            </div>
        </StyledHeader>
    );
}