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
        console.log(err.resposta);
        return null;
    }
}

export const postHabito = async (objeto,token) =>{
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    try {
        const resposta = await axios.post(URL,objeto,config);
        const {data} = resposta;
        console.log("Deu bom, salvo com sucesso ->", data);
        const retorno = "Ok!"

        return retorno;
    }
    catch(err) {
        console.log("Puts! deu ruim! ->",err);
        return null;
    }
}

export const getHabitos = async (token) =>{   

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    try {
        const resposta = await axios.get(URL,config);
        const {data} = resposta;
        console.log("Seus habitos ->", data);
        const retorno = data;
        return retorno;
    }
    catch(err) {
        console.log("Puts! deu ruim! ->",err);
        return null;
    }
	
}

export const deleteHabito = async (token,id) =>{

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;

    try {
        const resposta = await axios.delete(URL,config);
        const {data} = resposta;
        console.log(`Habito [${id}] apagado ->`,data);
        
        return 'ok';
    }
    catch(err) {
        console.log("Puts! deu ruim! ->",err);
        return null;
    }
    
}

export const getHoje = async (token) =>{   

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    try {
        const resposta = await axios.get(URL,config);
        const {data} = resposta;
        console.log("Seus habitos para Hoje ->", data);
        const retorno = data;
        return retorno;
    }
    catch(err) {
        console.log("Puts! deu ruim! ->",err);
        return null;
    }
	
}
