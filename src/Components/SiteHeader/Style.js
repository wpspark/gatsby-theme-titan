import styled from 'styled-components'

export const NavWrapper = styled.div`
    .navbar{
        background-color: ${props => props.theme.headerBg};
        box-shadow:none;
    }
    .title-in-dark-mode{
        color: ${props => props.theme.title};
        font-weight:800;
        font-size: 22px;
    }
`

export const ThemeSwitcher = styled.div`
    button{
        font-size:14px;
        font-weight:800;
        transition:all 0.3s ease;
        background:${props => props.theme.title};
        color: ${props => props.theme.background};
        border-color: ${props => props.theme.panel};
        &:hover{
            color: ${props => props.theme.background};
        }
        &:focus{
            color: ${props => props.theme.background};
            border-color: ${props => props.theme.panel};
        }
        @media(max-width:767px){
            position:absolute;
            top:10px;
            right:75px;
        }
    }
`