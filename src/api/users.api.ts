import axios, { AxiosRequestConfig } from 'axios';
import { LoginInfo } from '../types';
import { Config } from './../../config';

export function getLogin(login: LoginInfo) {
    return axios.get(Config.serverEndpoint + 'login', { params: login });
}

export function getLoginUsingToken(token: string) {
    return axios.get(Config.serverEndpoint + 'verifyToken', { params: { token } });
}

export function createUser(user) {
    return axios.post(Config.serverEndpoint + 'createUser', { ...user } as AxiosRequestConfig);
}