import Styled from 'styled-components';


export const SinglePostCard = Styled.article`
    border:none;
    box-shadow:none;
    .card-image{
        border:solid 1px #f7f7f7;
        line-height:0;
        img{
            width:100%;
        }
    }
    .card-content{
        padding:50px 100px;
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
        @media(max-width:768px){
            font-size:20px;
            line-height:1.3;
        }
        a{
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
    }
    .user-wrapper{
        p, a{
            font-size:13px;
        }
    }
`
