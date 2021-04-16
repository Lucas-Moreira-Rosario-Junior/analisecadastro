import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ifma-api-estacionamento.herokuapp.com'
});

export default api;


