import styled from "styled-components";

const StyledHabito= styled.div`
    margin-bottom: 10px;
    background: #FFFFFF;
    border-radius: 5px;
    width: 340px;
    height: 91px;

    display: flex;
    flex-direction: column;
    align-items: center;
    .conatiner{
        margin-top: 10px;
        width: 90%;
    }
    .caixa-dias{
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
    .caixa-titulo{
        display: flex;
        justify-content: space-between;
    }

    p{
        margin-bottom: 10px;
        color: #666666;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
    }

    .icone-lixo{
        font-size: 20px;
        color: #666666;
    }
`;

export {StyledHabito};