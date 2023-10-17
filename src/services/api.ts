import axios from "axios";

export const api = axios.create({
    //colocar o endereço que se repete em todas as requisições
    baseURL: 'http://localhost:3000/api',
});