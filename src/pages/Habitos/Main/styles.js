import styled from "styled-components";

const StyledMain = styled.main`
    margin-top: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .titulo-habitos{
        margin: 20px 0;
        width: 90%;
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

    p{
        width: 338px;
        height: 74px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        color: #666666;
    }
    
`;

export {StyledMain}