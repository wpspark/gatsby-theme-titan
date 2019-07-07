import Styled from 'styled-components';

export const PaginationWrapper = Styled.section`
    padding-top:0px !important;
    background: ${props => props.theme.background}
    li, a{
        color:${props => props.theme.meta};
        font-weight:800;
        font-size:15px;
        transition:all 0.5s ease;
        &:hover{
            color: ${props => props.theme.linkHover}
        }
    }
    @media(max-width:768px){
        li{
            margin-bottom:15px;
        }
    }
`