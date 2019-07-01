import Styled from 'styled-components';

export const PostNavigationWrapper = Styled.section`
    margin:30px 0px 30px;
    a{
        transition:all 0.5s ease;
        font-weight:700;
        &:focus{
            border-color:#dbdbdb;
        }
        &:hover{
            background-color:#f7f7f7;
        }
    }
`