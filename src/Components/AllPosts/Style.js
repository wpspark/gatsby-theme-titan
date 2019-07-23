import styled from 'styled-components';

export const MainBodyWrapper = styled.section`
    background: ${props => props.theme.background};
`

export const SinglePostCard = styled.article`
    border:none;
    box-shadow:none;
    background: ${props => props.theme.background};
    .card-image{
        border:solid 1px ${props => props.theme.panel};
        line-height:0;
        img{
            width:100%;
        }
    }
    .card-content{
        padding:50px 100px;
        color: ${props => props.theme.color};
        @media(max-width:767px){
            padding:30px 10px;
        }
    }
    a{
        color:#41a4e6;
    }
    .title{
        font-weight:800;
        font-size:28px;
        color: ${props => props.theme.title};
        @media(max-width:768px){
            font-size:20px;
            line-height:1.3;
        }
        a{
            color: ${props => props.theme.title};
            transition:all 0.4s ease;
            &:hover{
                color:#41a4e6 !important;
            }
        }
        
    }
    .post-meta{
        font-weight:800;
        font-size:12px;
        p, a{
            font-size:12px;
        }
    }
    .arrow-right{
        border-left: 5px solid #41a4e6;
    }
    .card-footer{
        margin-top:30px;
        border-top:solid 2px ${props => props.theme.panel};
    }
    .user-wrapper{
        p, a{
            font-size:13px;
        }
        a{
            color: ${props => props.theme.author};
        }
    }
`
