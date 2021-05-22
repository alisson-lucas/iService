import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/cadastro/Cadastro';
import Servicos from './pages/servicos/Servicos';
import Cadastro1 from './pages/cadastro1/cadastro1';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/servicos"  component={Servicos} />
                <Route path="/Cadastro1" component={Cadastro1} />
            </Switch>
        </BrowserRouter>
    )
} 