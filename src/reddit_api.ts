import axios from 'axios';

export function accessToken() {
    return axios.get('https://pay.reddit.com/r/all/.json?jsonp=folderCallback&callback=jQuery161025881816392482504_1558147800689&_=1558147800769');
}

export function me() {
    return axios.get('https://www.pay.reddit.com/api/v1/me');
}