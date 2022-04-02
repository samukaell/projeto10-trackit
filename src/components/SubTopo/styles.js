import styled from "styled-components";

const StyledMain = styled.main`
    margin-top: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .container{
        width: 90%;
    }

    .titulo-habitos{
        width: 90%;
        margin: 20px 0;
        display: flex;
        justify-content: space-between;

        .titulo{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            color: #126BA5;
        }
        .icone-add{
            width: 40px;
            height: 35px;
            background: #52B6FF;
            color:#FFFFFF;
            border-radius: 4.63636px;
        }
    } 
    .subtitulo{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        color: #BABABA;

    }
`;

export {StyledMain}