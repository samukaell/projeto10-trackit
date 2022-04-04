import styled from "styled-components";

const StyledHabito = styled.div`
    margin-bottom: 20px;
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        margin-top: 18px;
        margin-bottom: 8px;
        width: 303px;
        height: 45px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
    }
    .conatiner{
        width: 88%;
        display: flex;
        justify-content: flex-start;
    }
    .dias{
        display: flex;
        
    }
    .dia{
        
        display: flex;
        align-items: center;
        justify-content: center;

        width: 30px;
        margin-right: 4px;
        height: 30px;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
    }

    .naoSelecionado{
        background: #FFFFFF;
        color: #DBDBDB;
    }

    .selecionado{
        background: #CFCFCF;
        color: #FFFFFF;
    }

    .caixa-botoes{
        width: 88%;
        margin-top: 35px;
        display: flex;
        justify-content: flex-end;
    }
    .cancelar{
        margin-right: 10px;
        border: none;
        background-color: #FFFFFF;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        color: #52B6FF;
    }
    .salvar{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        color: #FFFFFF;
    }

`;

export {StyledHabito}