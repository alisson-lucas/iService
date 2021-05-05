import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from'../../assets/iservice_icon_blue.png';
import celular from '../../assets/celular principal.png';
import imgFundo from '../../assets/imgFundo.png';

export default function Register() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prestador, setPrestador] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      prestador,
      localizacao,
      latitude,
      longitude
    };

    try {
      const response = await api.post('/', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <>
        <div className="header">   
            <img src={logoImg} align="left" alt="logo" width="300px"/>
            <div>
                <a href=""className="btn-text-primary"> Ja tem conta? Entrar</a>
                <a href="" className="btn-primary">Cadastrar</a>
            </div>
        </div>
        
        <div className="CellPrinc">
            <div className="text-container">
                <h2 className="text-Secondary">Viemos para mudar a forma <br/> de como você divulga o seu <br/>trabalho</h2>
                <p>Entre agora e divulge seu trabalho para quem realmente está procurando o serviço ideal</p>
                <button className="btn-singUp">Começe ja</button>
            </div>
                <img src={celular} className="imgIph" align="left"/>
    
        </div>
        <div class="imgFundo">
            <div class="textFundo">
                <h2 class="textFundo">
                    o iService tem como objetivo ajudar o prestador de serviço a divulgar facilmente o seu trabalho para vários potenciais clientes.
                </h2>
            </div>
        <div class="textFundo_">
            <h2>
                E também ajudar o cliente a encontrar o serviço ideal e mais próximo possivel de onde se encontra.
            </h2>
        </div>
    </div> 




    </>
  );
}