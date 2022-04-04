import styled from "styled-components";

const StyledMain = styled.main`

    width: 60vw;
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .caixa-info{
        width: 90%;
    }
    .titulo{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        color: #52B6FF;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .subtitulo{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        color: #666666;
        margin-bottom: 10px;
    }
    .caixa-habitos{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .container{
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
    }
`;

export { StyledMain }