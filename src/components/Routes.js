import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Users from './Main/users/Users';
import NotFound from './NotFound';
import Products from './products/Products';
import SideBar from './SideBar';

const Router=()=>(
    <BrowserRouter>
            <SideBar />

        <Switch>
            <Route path='/' exact component={App}/>  
            <Route path='/products' exact component={Products}/>  
            <Route path='/users' exact component={Users}/>  
            <Route path='/' component={App}/> 
        </Switch>
    </BrowserRouter>
);

export default Router