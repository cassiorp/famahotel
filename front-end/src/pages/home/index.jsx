import React, { useState } from 'react';
import { Container, Form } from './style';

function Home(){
    const [texto, setTexto] = useState('');

    const showFile = (e) => {
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = (e.target.result)
          setTexto(text)
        };
        reader.readAsText(e.target.files[0])
    }

    return (
           <Container>
               <Form>
                   <h1>Ferramenta de Anotação Manual Automatizada</h1>
                    <div>
                        {texto}
                    </div>
                    <input type="file" accept=".txt" onChange={showFile} />
               </Form>
           </Container>
        );
}

export default Home;
