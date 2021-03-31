import styled, { createGlobalStyle } from "styled-components";

export const screenMaxWidth = `768px`;


export const color = {
    white: `#ffffff`,
    black: `#363636`,
    secondary: `#f9f9f9`,
    blackFooter: '#141414',
    darkCircle: '#414141',
    lightCircle: `#E5E5E5`
}

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: "Poppins", sans-serif;
    background-color: ${color.secondary};
    background: transparent;
};

b,
strong {
  font-weight: 800;
};

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1;
  margin: 0;
};

a {
  color: ${color.secondary};
  text-decoration: none;
};

p {
  margin: 0 0 20px;
};

ol,
ul {
  margin: 0;
  padding-inline-start: 32px;
};
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