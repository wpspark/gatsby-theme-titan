import styled from 'styled-components';

export const PostAuthorBox = styled.section`
    padding:30px 0px;
    margin:30px 0px;
    line-height:1.7;
    .title{
        font-weight:800;
        font-size:20px;
        margin-bottom:8px !important;
        a{
            color: ${props => props.theme.title};
        }
    }
`