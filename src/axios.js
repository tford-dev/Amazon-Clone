import axios from 'axios';

const instance = axios.create({
    //The api (cloud function url)
    baseURL: 'https://us-central1-clone-18b36.cloudfunctions.net/api'
    //Below is the local API endpoint for debugging purposes
    //'http://localhost:5001/clone-18b36/us-central1/api' 
});

export default instance;