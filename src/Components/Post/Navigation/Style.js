import styled from 'styled-components';

export const PostNavigationWrapper = styled.section`
    margin:30px 0px 30px;
    a{
        transition:all 0.5s ease;
        font-weight:700;
        background:transparent;
        &:focus{
            border-color:#dbdbdb;
        }
        &:hover{
            background-color:#f7f7f7;
        }
    }
`