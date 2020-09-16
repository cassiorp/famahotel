import styled from 'styled-components';


export const Div = styled.div`
    display: inline-block;
    position: fixed;
    width: 100vw;
    height: 30px;
    background-color: ${props => props.color};
    color: white;
    text-align: center;
    top: 0;
    left:0;

    p{
        padding-top: 5px;
    }
`