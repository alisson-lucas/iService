import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/cadastro/Cadastro';
import Servicos from './pages/servicos/Servicos';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/servicos"  component={Servicos} />
            </Switch>
        </BrowserRouter>
    )
} 