/**
 * Created by alex on 2/11/17.
 */
'use strict';

import React from 'react';
import TeamPreview from './TeamPreview';
import teams from '../data/teams';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="team-selector">
                    {teams.map(teamData => <TeamPreview key={teamData.id} {...teamData} />)}
                </div>

            </div>
        )
    }
}