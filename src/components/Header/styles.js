import styled from "styled-components";

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: center;

    .caixa{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .foto-user{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`;

export {StyledHeader}
