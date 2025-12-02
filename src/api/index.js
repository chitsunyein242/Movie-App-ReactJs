import axios from 'axios';
export const api_key = '7dc92be0abb045051bf66fdd913a4c96';

export const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
})
