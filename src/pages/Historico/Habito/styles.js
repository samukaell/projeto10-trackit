import styled from "styled-components";

const StyledMain = styled.main`
    width: 100%;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .name{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        color: #52B6FF;
    }
    .checkbox{
        font-size: 20px;
    }
    .feito{
        color: #8FC549;
    }
    .naoFeito{
        color: #BABABA;
    }
    
`;

export { StyledMain }