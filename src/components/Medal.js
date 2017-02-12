/**
 * Created by alex on 2/11/17.
 */
'use strict';
import React from 'react';

const placeMap = {
    1: 'Gold',
    2: 'Silver',
    3: 'Bronze'
};

export default class Medal extends React.Component {
    render() {
        return (
                <li className="medal">
                    <span className={`symbol symbol-${this.props.place}`} title={placeMap[this.props.place]}>{this.props.place}</span>
                    <span className="season">{this.props.season}</span>
                </li>


            )

    }
}