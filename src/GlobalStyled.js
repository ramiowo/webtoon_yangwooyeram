import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}
    li, a {
        text-decoration: none;
        display: block;
    }
`;
