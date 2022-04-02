import styled from "styled-components";

const StyledAtividade = styled.div`
    width: 340px;
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .caixa-info{
        margin-left: 15px;
    }

    .caixa-p{
        display: flex;
        p{
            margin-bottom: 17px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 12.976px;
        }
    }

    .checkbox{
        margin: 0 15px;
        font-size: 80px;
    }

    .naoFeito{
        color: #666666;
    }

    .feito{
        color: #8FC549;
    }

    .titulo{
        margin-top: 15px;
        margin-bottom: 7px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        color: #666666;
    }

    .subtitulo{
        margin-bottom: 17px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        color: #666666;
    }
`;
export {StyledAtividade}