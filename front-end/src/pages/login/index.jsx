import React, { Component } from 'react';
import { Container, Form } from './style';
import Api from '../../services/api';

import { Redirect } from "react-router-dom";

export default class Login extends Component {
    constructor() {
        super();
        this.api = new Api();
        this.state = {
            username: "",
            password: "",
            access: false,
            erro: "",
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


    login = async () => {
        const { username, password } = this.state;

        await this.api.postLogin(username, password)
            .then(
                (response) => {
                    this.setState({ access: true });
                    localStorage.setItem('token', response.data.accessToken);
                    alert(response.status)
                }

            ).catch(() => {
                this.setState({erro: "Usuario ou senha invalidos"})
                alert(this.state.erro)
            })
    };

    
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
                        <button type="submit" onClick={this.login}>Entrar</button>
                    </Form>
                </Container>
            );
    }
}