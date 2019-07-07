import Styled from 'styled-components';

export const TitleWrapper = Styled.h2`
    font-size:24px;
    margin:10px 0px 5px;
    font-weight:800;
`

export const PageTitleWrapper = Styled.section`
    background: ${props => props.theme.background}
    color: ${props => props.theme.color}
    h2{
        color: ${props => props.theme.title}
    }
`