import Styled from 'styled-components';

export const PaginationWrapper = Styled.section`
    padding-top:0px !important;
    li, a{
        color:hsl(0, 0%, 71%);
        font-weight:800;
        font-size:15px;
        transition:all 0.5s ease;
    }
    @media(max-width:768px){
        li{
            margin-bottom:15px;
        }
    }
`