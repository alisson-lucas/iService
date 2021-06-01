import Axios from 'axios';

export const api = Axios.create({
  baseURL: 'http://10.0.0.103:3333/'
});

export const apiProfissoes = Axios.create({
  baseURL: 'http://apps.diogomachado.com/api-profissoes/'
});


