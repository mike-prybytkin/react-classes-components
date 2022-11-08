import React, { Component } from 'react';
import ProductCard from 'components/product-card/product-card';
import { CardListProps } from './types';
import mockText from 'mocks/text';
import Pagination from 'components/pagination/pagination';

export class ProductCardList extends Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
  }

  renderCards() {
    return this.props.cards.map((card) => (
      <ProductCard buttonText={mockText.productCardButton} card={card} key={card.id} />
    ));
  }

  render() {
    const isCards = this.props.cards.length >= 1;
    return isCards ? (
      <React.Fragment>
        <div className="cards-wrapper">{this.renderCards()}</div>
        <Pagination
          queryPage={this.props.queryPage}
          allPages={this.props.allPages}
          cardsLimit={this.props.cardsLimit}
          updateQuery={this.props.updateQuery}
        />
      </React.Fragment>
    ) : (
      <p className="not-found-items-message">{mockText.itemNotFound}</p>
    );
  }
}

export default ProductCardList;
