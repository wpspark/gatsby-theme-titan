import Styled from "styled-components";

export const FooterWrapper = Styled.footer`
    padding:50px;
    background:${props => props.theme.footerBg};
    a{
        transition:all 0.4s ease;
        color: #41a4e6;
        font-weight:800;
    }
`