import styled from 'styled-components';

export const Aside = styled.aside`
    /**
    sidenav
    */
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 9;
    top: 0;
    right: -250px;
    background-color: #f5f5f5;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    
    a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 18px;
        color: #818181;
        display: block;
        transition: 0.3s;
        text-align:left;
        &:hover {
            color: #818181;
        }
    }

    .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
        border:none;
        background:transparent;
        cursor:pointer;
        &:focus{
            outline:none;
            border:none;
        }
    }
`

