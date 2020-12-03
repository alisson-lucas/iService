import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { FiArrowLeft } from 'react-icons/fi';

// import api from '../../services/api';
import './styles.css';

// import logoImg from '../../assets/logo.svg';

export default function Home() {
  

  return (
    <div className="register-container">
      <div className="content">
        <section>
          {/* <img src={logoImg} alt="Be The Hero"/> */}

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, para se cadastrar</p>

          {/* <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link> */}
        </section>

        <form >
          

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}