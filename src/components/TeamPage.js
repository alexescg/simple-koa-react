/**
 * Created by alex on 2/11/17.
 */
'use strict';

import React from 'react';
import {Link} from 'react-router';
import NotFoundPage from './NotFoundPage';
import TeamMenu from './TeamMenu';
import Medal from './Medal';
import teams from '../data/teams';

export default class TeamPage extends React.Component {
    render() {
        const id = this.props.params.id;
        const team = teams.filter((team) => team.id === id)[0];
        if (!team) {
            return <NotFoundPage/>;
        }
        const headerStyle = {backgroundImage: `url(/img/${team.image})`};
        return (
            <div className="team-full">
                <TeamMenu/>
                <div className="team">
                    <header style={headerStyle}/>
                    <div className="picture-container">
                        <img src={`/img/${team.image}`}/>
                        <h2 className="nickname"> The "{team.nickname}"</h2>
                    </div>
                    <section className="description">
                        English team from {team.city}.
                        <h3>
                            <a href={team.link} target="_blank">Wikipedia</a>
                        </h3>
                    </section>
                    <section className="medals">
                        <p>Last Premier League Table Standings: </p>
                        <ul>{
                            team.medals.map((medal, i) => <Medal key={i}{...medal}/>)}
                        </ul>
                    </section>
                </div>
                <div className="navigateBack">
                    <Link to="/"> Back </Link>
                </div>
            </div>
        );
    }
}