import React, { Component } from 'react';
import UserCard from 'components/user-card/user-card';
import { UserCardListProps } from './types';

class UserCardList extends Component<UserCardListProps> {
  renderCards() {
    return this.props.cards.map((card) => (
      <UserCard card={card} key={card.avatarPath.slice(30, 70)} />
    ));
  }
  render() {
    return <div className="user-cards-wrapper">{this.renderCards()}</div>;
  }
}

export default UserCardList;
