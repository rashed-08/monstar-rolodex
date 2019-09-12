import React, { Component } from 'react';

import './card.style.css'

class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <img alt="monster" src={`https://robohash.org/${this.props.monstar.id}?set=set2&size=180x180`}/>
                <h2>{this.props.monstar.name}</h2>
                <p>{this.props.monstar.email}</p>
            </div>
        );
    }
}

export default Card; 