import React, { Component } from 'react';
import Card from 'components/card/card';
import { CardListProps } from './types';

export class CardList extends Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
  }

  renderCards() {
    return this.props.cards.map((card) => <Card key={card.id} {...card} />);
  }

  render() {
    return <div className="cards-wrapper">{this.renderCards()}</div>;
  }
}

export default CardList;
