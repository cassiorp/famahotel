import React, { useState } from 'react';
import { Container, Form } from './style';
import { useHistory } from 'react-router-dom'
import { postLogin } from '../../services/api';

import Alert from '../../components/alert/Alert';


function Login() {
    const [username, setUsername] = useState(0);
    const [password, setPassword] = useState(0);
    const [error, setError] = useState(0);
    const [cor, setCor] = useState(0);
    const [texto, setTexto] = useState("");


    const history = useHistory();

    const handleChange = event => {
        if (event.target.name === "password") {
            setPassword(event.target.value);
        }
        if (event.target.name === "username") {
            setUsername(event.target.value);
        }
        console.log(event.target.value)
    };


    async function login(e) {
        e.preventDefault();

        try {
            const response = await postLogin(username, password);
            localStorage.setItem('token', response.data.accessToken);
            history.push('/home');

        } catch (error) {
            setTexto("Usuario ou senha incorretos!!");
            setCor("#fc6963");

            setTimeout(() => {
                setTexto("");
                setCor("");
            }, 3000);
        }

    };

    return (
        <Container>
            <Alert cor={cor} texto={texto} />
            <Form >
                <p>Bem vindo!</p>
                <input
                    type="text"
                    name="username"
                    placeholder="usuário"
                    onBlur={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="senha"
                    onBlur={handleChange}
                />
                <button type="submit" onClick={login}>Entrar</button>
            </Form>
        </Container>
    );




}

export default Login;
