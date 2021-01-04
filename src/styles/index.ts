import styled, { createGlobalStyle } from "styled-components";

export const screenMaxWidth = `768px`;


export type Color = {
    white: string;
    black: string;
    secondary: string;
}
export const color = {
    white: `#ffffff`,
    black: `#363636`,
    secondary: `#f9f9f9`
}

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: "Poppins", sans-serif;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-left: auto;
margin-right: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px){
    padding-right: 30px;
    padding-left: 30px;
}
`;