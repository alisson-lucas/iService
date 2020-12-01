import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { FiArrowLeft } from 'react-icons/fi';

// import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/iservice_icon_wite.png';

export default function Register() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prestador, setPrestador] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  // const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      prestador,
      city,
      uf,
    };

    // try {
    //   const response = await api.post('ongs', data);

    //   alert(`Seu ID de acesso: ${response.data.id}`);

    //   history.push('/');
    // } catch (err) {
    //   alert('Erro no cadastro, tente novamente.');
    // }
  }

  return (
    <div className="register-container">
      <div className="content">
        <div className="left">
          <section>
            <img src={logoImg} alt="iService"/>

            <h1>iService</h1>
            <p>Divulgue seu serviço para novas pessoas.</p>

            {/* <Link className="back-link" to="/">
              <FiArrowLeft size={16} color="#E02041" />
              Não tenho cadastro
            </Link> */}
          </section>
        </div> 
        <div className="right">
          <form onSubmit={handleRegister}>
            <input 
              placeholder="Nome do servço"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />

            <input 
              type="Descrição" 
              placeholder="descricao"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />

            <input 
              placeholder="Prestador"
              value={prestador}
              onChange={e => setPrestador(e.target.value)}
            />

            <div className="input-group">
              <input 
                placeholder="Localização"
                value={city}
                onChange={e => setCity(e.target.value)}
              />

              <input 
                placeholder="UF" 
                style={{ width: 90 }}
                value={uf}
                onChange={e => setUf(e.target.value)}
              />
            </div>

            <button className="button" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}