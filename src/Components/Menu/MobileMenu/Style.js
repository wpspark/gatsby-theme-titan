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