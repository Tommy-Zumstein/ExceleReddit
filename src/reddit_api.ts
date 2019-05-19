import axios from 'axios';

export function getHomePage() {
    return axios.get('https://pay.reddit.com/r/all/.json');
}

export function me() {
    return axios.get('https://www.pay.reddit.com/api/v1/me');
}