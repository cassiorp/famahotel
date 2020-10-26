import React from 'react';
import {Div} from './style';

function Features(props){
    return(
       <Div id={props.id}>
           <select>
                <option value="valor1" selected>Feature</option> 
                <option value="valor2" >Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
            <select >
                <option value="valor1" selected>subfeature</option> 
                <option value="valor2" >Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
            <select>
                <option value="valor1" selected>subsubfeature</option> 
                <option value="valor2" >Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
            <select>
                <option value="valor1" selected>polaridade</option> 
                <option value="valor2" >Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
            <select >
                <option value="valor1" selected >exim</option> 
                <option value="valor2" >Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
            <input />
            {/* <button onClick={props.click}>Remover linha</button> */}
       </Div>
            
    )
}

export default Features;