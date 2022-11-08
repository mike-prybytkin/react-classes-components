import React, { Component } from 'react';
import ProductCard from 'components/product-card/product-card';
import { CardListProps } from './types';

export class ProductCardList extends Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
  }

  renderCards() {
    return this.props.cards.map((card) => <ProductCard card={card} key={card.id} />);
  }

  render() {
    return <div className="cards-wrapper">{this.renderCards()}</div>;
  }
}

export default ProductCardList;
