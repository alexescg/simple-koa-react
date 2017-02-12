/**
 * Created by alex on 2/11/17.
 */
'use strict';

import React from 'react';
import { Link } from 'react-router';
import teams from '../data/teams';

export default class TeamMenu extends React.Component {
    render() {
        return (
            <nav className="team-menu">
                {teams.map(menuTeam => {
                    return <Link key={menuTeam.id}
                                 to={`/team/${menuTeam.id}`}
                                 activeClassName="active">
                        {menuTeam.name}
                    </Link>
                })}
            </nav>
        );
    }
}