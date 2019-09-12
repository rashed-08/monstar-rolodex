import React, { Component } from 'react';
import './card-list.style.css';
import Card from '../card/card.component';

class CardList extends Component {
    render() {
        return (
            <div className="cardlist">
                {          
                    this.props.monsters.map(monstar => (
                        <Card key={monstar.id} monstar={monstar}/>
                    ))
                }
            </div>
        );
    }
}

export default CardList;