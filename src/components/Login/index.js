import { Link,useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { postCadastro,postLogin } from '../../service';
import LogadoContext from '../../util/LogadoContext';

import {StyledLogin} from './styles'
import logo from '../../midia/Group 8.png'

export default function Login(props){

    const { setLogin } = useContext(LogadoContext);

    const {cadastro} = props;
    const {login,definirLogin,senha,definirSenha} = props;


    const {email,name,image,password} = props;
    const {setEmail,setName,setImage,setPassword} = props;

    const navigate = useNavigate();

    async function handleSubmitLogin(e){
        e.preventDefault();

        const retorno = await postLogin({
            email: login,
            password: senha
        }); 
        if(retorno !== null){
            setLogin(retorno)
            navigate('/habitos');
        }else{
            alert("Seu endereço de email ou senha estão incorretos");
        }
    }
    function handleSubmitCadastro(e){
        e.preventDefault();
        navigate('/');

        postCadastro({
            email: email,
            name: name,
            image: image,
            password: password
        })
        
    }

    if(cadastro){
        return (
            <StyledLogin>
            
                <div className="Logo"> 
                    <img src={logo} alt = "Logo"/>
                </div>
                <form className="input-inicio" onSubmit={handleSubmitCadastro}>
                    <input className="input-email" type="email"  placeholder="email" required
                        value={email} onChange={e => setEmail(e.target.value)}
                    />
                    <input className="input-senha" type="password"  placeholder="senha" required
                        value={password} onChange={e => setPassword(e.target.value)}
                    />
                    <input className="input-nome" type="text"  placeholder="Nome" required
                        value={name} onChange={e => setName(e.target.value)}
                    />
                    <input className="input-foto" type="url"  placeholder="foto" required
                        value={image} onChange={e => setImage(e.target.value)}
                    />
                    <button className="botao-input" type='subimit'>Entrar</button>
                </form>

                <Link to={"/"}>
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
                
           
            </StyledLogin>
        )

    }else{
        return (
            <StyledLogin>
            
                <div className="Logo"> 
                    <img src={logo} alt = "Logo"/>
                </div>
                <form className="input-inicio" onSubmit={handleSubmitLogin}>
                    <input className="input-email" type="email"  placeholder="email" required
                        value={login} onChange={e => definirLogin(e.target.value)}
                    />
                    <input className="input-senha" type="password"  placeholder="senha" required
                        value={senha} onChange={e => definirSenha(e.target.value)}
                    />
                    <button className="botao-input" type='subimit'>Entrar</button>
                </form>

                <Link to={"/cadastro"}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
    
                
           
            </StyledLogin>
        )
    }
}