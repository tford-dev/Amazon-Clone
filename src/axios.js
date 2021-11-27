import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-18b36.cloudfunctions.net/api'
    //Below is the local API endpoint for debugging purposes
    //'http://localhost:5001/clone-18b36/us-central1/api' 
    //The api (cloud function url)
});

export default instance;