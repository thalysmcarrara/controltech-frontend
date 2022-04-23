import axios from 'axios';

export interface UserAuthResponse {
  token: string;
}

export const api = axios.create({
  baseURL: process.env.apiURL || 'http://localhost:3333',
});
