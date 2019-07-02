import Styled from 'styled-components';


export const MobileMenuWrapper = Styled.div`
    display:none;
    @media(max-width:992px){
        display:block;
        position:absolute;
        right:10px;
        top:10px;
        button{
            transition:all 0.4s ease;
            font-weight:800;
            font-size:14px;
        }
    }
`

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
            color:#0a0a0a !important;
        }
    }
`