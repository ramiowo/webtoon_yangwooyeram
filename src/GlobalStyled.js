import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}
    body{
        background-color: #121212;
    }
    li, a {
        text-decoration: none;
        display: block;
    }


`;
