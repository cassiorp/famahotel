import React, { Component } from 'react';
import { Container, Form } from './style';
import Api from '../../services/api';
import { login } from '../../services/auth'
import { Redirect } from "react-router-dom";

export default class Login extends Component {
    constructor() {
        super();
        this.api = new Api();
        this.state = {
            username: "",
            password: "",
            access: false,
        };
    }

    handleChange = event => {
        if (event.target.name === "password") {
            this.setState({ password: event.target.value });

        }
        if (event.target.name === "username") {
            this.setState({ username: event.target.value });

        }
        console.log(event.target.value)
    };


    onClick = async () => {
        const { username, password } = this.state;

        const response = await this.api.postLogin(username, password);
        // localStorage('acessToken', response.data.accessToken)
        localStorage.setItem('token', response.data.accessToken);
        
        alert(response.status)

        // await this.api.postLogin(username, password).then(response => {
        //     if (response.status === 201) {
                
        //         const accessToken = response.data.accessToken;

        //         localStorage.setItem('token',accessToken);

        //         this.setState({ access: true });

        //         alert("Token " + localStorage.getItem('token'))
        //     }
            
        // });
    };

    mostraLogin = () => {
        const login = {
            usuario: this.state.username,
            senha: this.state.password
        }
        alert(login.usuario + login.senha)
    }




    render() {
        const { access } = this.state;
        if (access) return <Redirect to={{ pathname: "/home" }} />;
        else
            return (
                <Container>
                    <Form >
                        <p>Bem vindo!</p>
                        <input
                            type="text"
                            name="username"
                            placeholder="usuário"
                            onBlur={this.handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="senha"
                            onBlur={this.handleChange}
                        />
                        <button type="submit" onClick={this.onClick}>Entrar</button>
                    </Form>
                </Container>
            );
    }
}