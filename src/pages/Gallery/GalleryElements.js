import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    background: transparent;
    position: relative;
    height: 650px;
    padding: 128px;
    `;

export const CardContent = styled.div`
    padding: 16px;
    background-color: white;
    position: absolute;
    height: 400px;
    width: 700px;
    background-color: black;
    cursor: pointer;
    background: url(${({ img }) => `img/${img}`});
    background-size: cover;
    ${({ alignment }) => alignment === 'right' ? `
        right: 200px;
        transform: rotate(15deg);
    ` : `
        left: 200px;
        transform: rotate(-15deg);
    `}
    &:hover {
        border: 2px solid white;
    }
`;

export const Parallax = styled.div`
    background: url('../../images/svg-1.1.svg') center;
    background-size: cover;
    background-attachment: fixed;
    width: 100vw;
`;

export const CardText = styled.div`
    padding: 16px;
    background-color: black;
    color: white;
    text-align: center;
    opacity: 0.8;
    h1 {
        font-size: 32px;
    }
`;