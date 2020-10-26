import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;

`;

export const Form = styled.form`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    

    div{
        background-color: white;
        width: 700px;
        height: 200px;
        padding: 5px;
        border-radius: 4px;
        border-color: #fc6963;
        border-style: solid;
        border-width: 1px;
        margin-top: 5px;
    }
    
    input {
        font-size: 16px;
        margin-top: 5px;
        border: 0;
        border-radius: 5px;
        text-align: center;
  }

`;

export const List = styled.ul`
   li{
      list-style-type: none;
   }
  
`;


