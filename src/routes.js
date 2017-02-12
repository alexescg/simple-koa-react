/**
 * Created by alex on 2/11/17.
 */
'use strict';
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import TeamPage from './components/TeamPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage}/>
        <Route path="team/:id" component={TeamPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;