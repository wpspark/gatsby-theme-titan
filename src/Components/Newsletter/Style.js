import Styled from 'styled-components';

export const lightTheme = {
    subtitlefz: "30px"
}

export const NewsletterWrapper = Styled.div`
    padding:100px;
    .title{
        font-size:${ lightTheme.subtitlefz };
        font-weight:700;
        margin-bottom:10px;
    }
    form{
        margin:30px 0px;
        input[type="email"]{
            width:300px;
        }
    }
    .submit-message{
        margin:30px 0px;
        font-weight:800;
        .result{
            text-transform: uppercase;
        }
    }
`