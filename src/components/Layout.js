/**
 * Created by alex on 2/11/17.
 */
'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <header>
                    <Link to="/">
                        <img className="logo" src="/img/premierleague.png"/>
                    </Link>
                </header>
                <div className="app-content">{this.props.children}</div>
                <footer>
                    <p>
                        Simple app using <strong> Koa + React </strong>
                    </p>
                </footer>
            </div>
        );
    }
}