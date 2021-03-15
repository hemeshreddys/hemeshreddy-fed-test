import Styled from 'styled-components'

export const Card = Styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom:5px;
    padding: 10px 20px;
    background-color:#f44336;
    border-radius: 5px;
    color: #ffffff;    
    @media (min-width: 1024px) {
        width: 30%;
    }
    img{
        border-radius: 75px;
        max-width: 25%;
    }
    .users{
        margin-left:20px;
        h2, p { 
            margin: 0;
        }
    }
`
export const Container = Styled.div `
    display: flex;
    width:100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Btn = Styled.a `
    color: #ffffff;
    background-color: #f44336;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
`