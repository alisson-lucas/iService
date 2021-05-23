import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/cadastro/Cadastro';
import Servicos from './pages/servicos/Servicos';
import Cadastro1 from './pages/cadastro1/cadastro1';
import Login from './pages/cadastro/Login';
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/servicos"  component={Servicos} />
                <Route path="/Cadastro1" component={Cadastro1} />
                <Route path="/Login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
} 