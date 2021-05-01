
import axios from 'axios';

export default axios.create( {
    baseURL: "http://localhost:8080/api",
    hedders: {
        "Content-type": "application/json"
    }
})