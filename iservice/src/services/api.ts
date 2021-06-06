import Axios from 'axios';

export const api = Axios.create({
  baseURL: 'http://192.168.18.6:3000'
});

export const apiProfissoes = Axios.create({
  baseURL: 'http://apps.diogomachado.com/api-profissoes/'
});


