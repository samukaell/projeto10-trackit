import styled from "styled-components";

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 2;
    width: 100%;
    height: 70px;

    background: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;

    .caixa{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        color: #52B6FF;
    }
    
`;
export {StyledFooter}