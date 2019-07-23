import styled from 'styled-components';

export const PostContentWrapper = styled.div`
    line-height:1.7;
    .wp-block-image{
        margin-left:0;
    }
    
    a{
        font-weight:800;
        color:#41a4e6;
        transition:all 0.4s ease;
        &:hover{
            color:#41a4e6 !important;
        }
    }

    h2, h3, h4, strong{
        font-weight:800 !important;
        color:${props => props.theme.title} !important;
    }
    
    h2{
        font-size:24px !important;
    }
    h3{
        font-size:20px !important;
    }
    ul{
        margin-left:18px !important;
        font-size:16px;
    }
`

