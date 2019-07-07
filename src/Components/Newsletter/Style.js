import Styled from 'styled-components';

export const lightTheme = {
    subtitlefz: "30px"
}

export const NewsletterWrapper = Styled.div`
    background: ${props => props.theme.background}
    padding:100px;
    @media(max-width:768px){
        padding:0px;
    }
    .title{
        font-size:${ lightTheme.subtitlefz };
        font-weight:700;
        margin-bottom:10px;
        color: ${props => props.theme.title}
        @media(max-width:768px){
            font-size:22px;
            line-height:1.2;
        }
    }
    form{
        margin:30px 0px;
        input[type="email"]{
            width:300px;
            @media(max-width:768px){
                width:auto;
            }
        }
    }
    .subscriber-panel{
        background: ${props => props.theme.panel}
    }
    .submit-message{
        margin:30px 0px;
        font-weight:800;
        .result{
            text-transform: uppercase;
        }
    }
`