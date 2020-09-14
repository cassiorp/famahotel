import axios from 'axios';
import { getToken } from "./auth";
import {isAuthenticated} from '../services/auth';

export default class Api {

    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:3333"
        })

        this.api.interceptors.request.use(async config => {
            const token = getToken();
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        })

    }

    postLogin = (usuario, senha) => this.api.post("/auth/login", { "usuario": usuario, "senha":senha});


}
