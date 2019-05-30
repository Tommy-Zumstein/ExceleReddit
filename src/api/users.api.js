import axios from 'axios';

export function createUser(user) {
    return axios.post('http://localhost:8080/createUser', user);
}