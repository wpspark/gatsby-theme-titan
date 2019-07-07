import Styled from 'styled-components';

export const MenuItems = Styled.div`
    margin-left:15px;
    border-left:solid 2px #eee;
    padding:0 !important;
    padding-left:10px !important;
    a.navbar-item{
        font-weight:800;
        font-size:14px;
        transition:all 0.4s ease;
        &:hover{
            color:${props => props.theme.linkHover} !important;
        }
    }
`