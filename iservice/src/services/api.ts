import Axios from 'axios';

export const API = Axios.create({
  baseURL: 'http://192.168.0.201:3000'
});

export const apiProfissoes = Axios.create({
  baseURL: 'http://apps.diogomachado.com/api-profissoes/'
});