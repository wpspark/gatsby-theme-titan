import styled from 'styled-components';

export const PostHeaderWrapper = styled.div`
    padding-bottom:0px !important;
    .title{
        font-size:28px;
        font-weight:800;
        margin-bottom:15px;
        color: ${props => props.theme.title};
    }

`