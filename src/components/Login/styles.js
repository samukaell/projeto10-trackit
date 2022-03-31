import styled from "styled-components";

const StyledLogin = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        margin: 70px;
        margin-bottom: 33px;
        height: 178px;
        width: 180px;
    }

    .input-inicio{
        display: flex;
        flex-direction: column;

        input{
            width: 303px;
            height: 45px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            box-sizing: border-box;
            border-radius: 5px;
            margin-bottom: 6px;

            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            color: #DBDBDB;
        }

        button{
            width: 303px;
            height: 45px;
            background: #52B6FF;
            border-radius: 4.63636px;
            color: #FFFFFF;
        }
    }

    p{
        margin-top: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        color: #52B6FF;
    }
`;

export {StyledLogin}