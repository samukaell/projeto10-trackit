import { Link,useNavigate } from 'react-router-dom';
import { useContext,useState } from 'react';
import { postCadastro,postLogin } from '../../service';
import LogadoContext from '../../util/LogadoContext';
import Loader from 'react-loader-spinner'
import {StyledLogin} from './styles'
import logo from '../../midia/Group 8.png'

export default function Login(props){
    const [habilitar,setHabilitar] = useState(false);
    const [habilitarCad,setHabilitarCad] = useState(false);

    const { setLogin } = useContext(LogadoContext);

    const {cadastro} = props;
    const {login,definirLogin,senha,definirSenha} = props;


    const {email,name,image,password} = props;
    const {setEmail,setName,setImage,setPassword} = props;

    const navigate = useNavigate();

    async function handleSubmitLogin(e){
        e.preventDefault();
        setHabilitar(!habilitar);
        const retorno = await postLogin({
            email: login,
            password: senha
        }); 
        if(retorno !== null){
            setHabilitar(!habilitar);
            setLogin(retorno)
            navigate('/habitos');
        }else{
            alert("Seu endereço de email ou senha estão incorretos");
        }
    }
    async function handleSubmitCadastro(e){
        e.preventDefault();
        setHabilitarCad(!habilitarCad);
        
        
        const  retorno = await postCadastro({
            email: email,
            name: name,
            image: image,
            password: password
        })

        if(retorno !== null){
            setHabilitarCad(!habilitarCad);
            navigate('/');
        }else{
            alert("Por favor preencha os campos novamente.");
        }
        
    }

    if(cadastro){
        return (
            <StyledLogin>
            
                <div className="Logo"> 
                    <img src={logo} alt = "Logo"/>
                </div>
                <form className="input-inicio" onSubmit={handleSubmitCadastro}>
                    <input className="input-email" type="email"  placeholder="email" disabled={habilitar} required
                        value={email} onChange={e => setEmail(e.target.value)}
                    />
                    <input className="input-senha" type="password"  placeholder="senha" disabled={habilitar} required
                        value={password} onChange={e => setPassword(e.target.value)}
                    />
                    <input className="input-nome" type="text"  placeholder="Nome" disabled={habilitar} required
                        value={name} onChange={e => setName(e.target.value)}
                    />
                    <input className="input-foto" type="url"  placeholder="foto" disabled={habilitar} required
                        value={image} onChange={e => setImage(e.target.value)}
                    />
                    <button className="botao-input" disabled={habilitar} type='subimit'>
                        {habilitarCad ? 
                            "Loadiong . . ."
                            : 
                            'Entrar'
                        }
                    </button>
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
                    <input className="input-email" type="email"  placeholder="email" disabled={habilitar} required
                        value={login} onChange={e => definirLogin(e.target.value)}
                    />
                    <input className="input-senha" type="password"  placeholder="senha" disabled={habilitar} required
                        value={senha} onChange={e => definirSenha(e.target.value)}
                    />
                    <button className="botao-input" disabled={habilitar} type='subimit'>
                        {habilitar ? 
                            "Loadiong . . ."
                            : 
                            'Entrar'
                        }
                    </button>
                </form>

                <Link to={"/cadastro"}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
    
                
           
            </StyledLogin>
        )
    }
}