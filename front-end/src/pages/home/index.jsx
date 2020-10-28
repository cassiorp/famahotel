import React, { useState } from 'react';
import { Container, Form, List } from './style';
import Features from '../../components/features/Features';

function Home(){

    const [texto, setTexto] = useState('');
    const [features, setFeatures] = useState([]);


    const showFile = (e) => {
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = await (e.target.result)
          setTexto(text)
        };
        reader.readAsText(e.target.files[0])
    }

    const addLine = () => {
        const lines = Array.from(features);
        lines.push({id: features.length});
        setFeatures(lines);
    }

    const removeLine = (index) => {
        const itensCopy = Array.from(features);
        itensCopy.splice(index, 1);
        setFeatures(itensCopy);
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

                
                <List>
                    { features.map(({id, value}, index) =>
                        <li>
                            <Features 
                                key={id} 
                                onDelete={removeLine} />                     
                        </li>
                    )}
                </List>
               
                <button onClick={addLine}> adicionar linha </button>
                
           </Container>
        );
}

export default Home;
