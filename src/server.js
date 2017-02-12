/**
 * Created by alex on 2/11/17.
 */
'use strict';

import path from 'path';
import { Server } from 'http';
import Koa from 'koa';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';
import views from 'koa-views';
var router = require('koa-router')();

const app = new Koa();
app.use(views(__dirname, {map: {ejs: 'ejs'}}));
app.use(require('koa-static')(path.join(__dirname, 'static')));
app.use(router.routes()).use(router.allowedMethods());

router.get('*', function * () {
    match(
        {routes, location: this.req.url},
        (err, redirectLocation, renderProps) => {

            if (err) {
                this.status = 500;
                this.body = err.message;
            }

            if (redirectLocation) {
                this.status = 302;
                this.redirect(redirectLocation.pathname + redirectLocation.search);
            }

            let markup;
            if (renderProps) {
                markup = renderToString(<RouterContext {...renderProps}/>);
            } else {
                markup = renderToString(<NotFoundPage/>);
                this.status = 404;
            }
            return views('index', {markup});
        }
    );
});

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info('Running on port: ' + port);
});

