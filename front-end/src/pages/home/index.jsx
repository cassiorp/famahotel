import React, { useState } from 'react';
import { Container, Form, List } from './style';
import Features from '../../components/features/Features';

function Home(){
    const [texto, setTexto] = useState('');
    const [features, setFeatures] = useState([]);
    const [ids, setIds] = useState(0);

    const showFile = (e) => {
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const text = await (e.target.result)
          setTexto(text)
        };
        reader.readAsText(e.target.files[0])
    }

    const addLine = () => {
        let id = ids;
        id++;
        setIds(id);
        console.log(id);
        setFeatures([ ...features, <Features id={id}/> ])
        console.log(features)
    }

    const removeLine = (id) => {
       console.log(id)
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

                {/* {features} */}
                
                <List>
                    { features.map((feature) =>
                        <li>
                            {feature}
                            <button onClick={removeLine(feature.key)}>Excluir linha</button>
                        </li>
                    )}
                </List>
                
                <button onClick={addLine}> adicionar linha </button>
           </Container>
        );
}

export default Home;
