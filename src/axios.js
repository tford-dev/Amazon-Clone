import axios from 'axios';

const instance = axios.create({
    baseURL: '...' //The api (clolud function url)
});

export default instance;