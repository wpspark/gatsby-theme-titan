import Styled from 'styled-components'; 

export const CarouselWrapper = Styled.section`
    position:relative;
    .hero-body{
        margin:50px auto 0px;
    }
    .item{
        position:relative;
        z-index:9;
        .card-content{
            h2{
                a{
                    font-weight:800;
                    transition:all 0.4s ease;
                    color:hsl(0, 0%, 29%);
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