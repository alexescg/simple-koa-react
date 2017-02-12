/**
 * Created by alex on 2/11/17.
 */
'use strict';
import React from 'react';
import { Link } from 'react-router';

export default class TeamPreview extends React.Component {
    render() {
        return (
            <Link to={`/team/${this.props.id}`}>
                <div className="team-preview">
                    <img src={`/img/${this.props.image}`} alt={this.props.image}/>
                    <h2 className="name">{this.props.name}</h2>
                </div>
            </Link>
        );
    }
}