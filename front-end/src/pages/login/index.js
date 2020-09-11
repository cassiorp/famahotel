import React, { Component } from 'react';
import { Container, Form } from './style';


export default class Login extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <p>Bem vindo!</p>
                    <input type="text" placeholder="Usuario" />
                    <input type="password"  placeholder="Senha" />
                    <button>Entrar</button>
               </Form>
           </Container>
        );
    }
}