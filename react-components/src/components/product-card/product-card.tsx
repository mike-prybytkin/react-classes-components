import React from 'react';
import { ProductCardProps, ProductCardState } from './types';
import ModalWindow from 'components/modal-window/modal-window';

class ProductCard extends React.Component<ProductCardProps, ProductCardState> {
  constructor(props: ProductCardProps) {
    super(props);
    this.state = {
      isOpenModalWindow: false,
      clickedCard: {
        name: '',
        image: '',
        status: '',
        gender: '',
        species: '',
        type: '',
        location: {
          name: '',
          url: '',
        },
      },
    };
  }

  markupForModalWindow() {
    const { clickedCard } = this.state;
    return (
      <div className="modal-body-wrapper">
        <img className="modal-cart-picture" src={clickedCard.image} alt={clickedCard.name} />
        <div className="modal-cart-items">
          <h4 className="modal-cart-items__name">{clickedCard.name}</h4>
          <p className="modal-cart-items__status">
            <span>Status: </span>
            {clickedCard.status}
          </p>
          <p className="modal-cart-items__species">
            <span>Species: </span>
            {clickedCard.species}
          </p>
          <p className="modal-cart-items__type">
            <span>Type: </span>
            {clickedCard.type ? clickedCard.type : '---'}
          </p>
          <p className="modal-cart-items__gender">
            <span>Gender: </span>
            {clickedCard.gender}
          </p>
          <p className="modal-cart-items__location">
            <span>Location: </span>
            {clickedCard.location.name}
          </p>
        </div>
      </div>
    );
  }

  buttonHandler = () => {
    this.setState({
      clickedCard: this.props.card,
      isOpenModalWindow: true,
    });
  };

  onModalWindow = () => {
    this.setState({
      isOpenModalWindow: false,
    });
  };

  render() {
    const { card } = this.props;
    const { isOpenModalWindow } = this.state;
    return (
      <React.Fragment>
        <div className="card">
          <img className="card__img" src={card.image} alt={card.image} />
          <h3 className="card__title">{card.name}</h3>
          <button className="card__button" onClick={this.buttonHandler}>
            {this.props.buttonText}
          </button>
        </div>
        {isOpenModalWindow && (
          <ModalWindow onModalWindow={this.onModalWindow}>
            {this.markupForModalWindow()}
          </ModalWindow>
        )}
      </React.Fragment>
    );
  }
}

export default ProductCard;
