import axios from 'axios';

export function getHomePage() {
    return axios.get('https://pay.reddit.com/r/all/.json');
}

export function getComments(id: String) {
    return axios.get(`https://pay.reddit.com/comments/${id}.json`);
}