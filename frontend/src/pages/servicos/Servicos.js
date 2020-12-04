import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/iservice_icon_blue.png';

class Servicos extends React.Component {
    state = {
        servicos: []
    };

    componentDidMount() {
        fetch('http://localhost:3333/servicos')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    servicos: res
                });
            });
    }

    render() {
        return (
            <div className="main-container">
                <Link to="/">
                    <img src={logoImg} alt="iService"/>
                </Link>
                <h1>Lista de servicos</h1>
                <ul>
                    {this.state.servicos.map(item => (
                        <div className="card">
                            <li key={item.id}>
                                <p><b>Nome do serviço:</b> {item.title}</p>
                                <p><b>Descrição:</b> {item.description}</p>
                                <p><b>Prestador do seriço:</b> {item.prestador}</p>
                                <p><b>Cidade:</b> {item.localizacao}</p>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Servicos;