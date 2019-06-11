import axios, { AxiosRequestConfig } from 'axios';

import { LoginInfo } from '../types';

export function getLogin(login: LoginInfo) {
    return axios.get('http://localhost:8080/login', { params: login });
}

export function createUser(user) {
    return axios.post('http://localhost:8080/createUser', { ...user } as AxiosRequestConfig);
}