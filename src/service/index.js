import axios from "axios";



export const postCadastro = (objeto) =>{
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
    
    const requisicao = axios.post(URL,objeto);
    requisicao.then((resposta)=>{
        const {data} = resposta;
        console.log("Cadastro ->", data);
        return data;
    });
    requisicao.catch((err)=>{
        console.log(err.resposta);
        return null;
    })
    
}
/*
export const postLogin = (objeto) =>{

    let retorno = {
        name: null,
        image: null,
        token: null
    }

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
    const requisicao = axios.post(URL,objeto);
    requisicao.then((resposta)=>{
        const {data} = resposta;
        console.log("Login ->", data);
        retorno = {
            name: data.name,
            image: data.image,
            token: data.token
        }
        return retorno;
    });
    requisicao.catch((err)=>{
        console.log(err.resposta);
        retorno = null;
        return retorno;
    })

    return retorno;
}
*/

export const postLogin = async (objeto) =>{

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

    try {
        const resposta = await axios.post(URL,objeto);
        const {data} = resposta;
        console.log("Login ->", data);
        const retorno = {
            name: data.name,
            image: data.image,
            token: data.token
        }

        return retorno;
    }
    catch(err) {
        console.log(err);
        return null;
    }
}
