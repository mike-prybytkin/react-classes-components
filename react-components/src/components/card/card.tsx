import React from 'react';
import { ICard } from 'share/types';

class Card extends React.Component<ICard, unknown> {
  constructor(props: ICard) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <h3 className="card__title">{this.props.title}</h3>
        <img className="card__img" src={this.props.image} alt={this.props.category} />
        <p className="card__rating">{this.props.rating.rate} &#9733;</p>
        <p className="card__price">{this.props.price} &#36;</p>
      </div>
    );
  }
}

export default Card;
