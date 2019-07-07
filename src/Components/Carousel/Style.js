import Styled from 'styled-components'; 

export const CarouselWrapper = Styled.section`
    position:relative;
    background: ${props => props.theme.background}
    padding:100px 0px 0px;
    @media(max-width:768px){
        padding:0px 30px;
    }
    .hero-body{
        margin:50px auto 0px;
        @media(max-width:768px){
            padding-bottom:0px;
        }
    }
    .item{
        position:relative;
        z-index:9;
        .card-image{
            .post-categories{
                position:absolute;
                top:15px;
                right:15px;
                a{
                    margin:0px 5px;
                    background:#41a4e6;
                    color:white;
                    padding:4px 12px;
                    font-size:13px;
                    display:inline-block;
                    font-weight:700;
                    border-radius:50px;
                }
            }
        }
        .card-content{
            h2{
                a{
                    color: ${props => props.theme.title}
                    font-weight:800;
                    transition:all 0.4s ease;
                    &:hover{
                        color:#41a4e6;
                    }
                }
            }
        }
    }
    .owl-carousel{
        .owl-nav{
            position:absolute;
            width:100%;
            left:0;
            top:0;
            button.owl-prev, button.owl-next{
                width:40px;
                height:40px;
                background:white;
                border-radius:50%;
                color:black;
                line-height:30px;
                position:absolute;
                top:100px;
                box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
                z-index:1;
                &:focus{
                    border:none;
                    outline:none;
                }
                span{
                    font-size:30px;
                }
            }
            button.owl-prev{
                left:-30px;
            }
            button.owl-next{
                right:-30px;
            }

        }
        .owl-dots{
            position:absolute;
            width:100%;
            bottom:-35px;
        }
    }
    
`