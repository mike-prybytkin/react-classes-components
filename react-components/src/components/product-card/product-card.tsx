import React from 'react';
import { ProductCardProps } from './types';

class ProductCard extends React.Component<ProductCardProps> {
  constructor(props: ProductCardProps) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <h3 className="card__title">{this.props.card.title}</h3>
        <img className="card__img" src={this.props.card.image} alt={this.props.card.category} />
        <p className="card__rating">{this.props.card.rating.rate} &#9733;</p>
        <p className="card__price">{this.props.card.price} &#36;</p>
      </div>
    );
  }
}

export default ProductCard;
