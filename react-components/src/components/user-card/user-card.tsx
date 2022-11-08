import React, { Component } from 'react';
import { UserCardProps } from './types';
import mockText from 'mocks/text';

class UserCard extends Component<UserCardProps> {
  render() {
    const { card } = this.props;
    const isMailing = card.mailing;
    return (
      <div className="user-card">
        <img className="user-card__avatar" src={card.avatarPath} alt={card.name} />
        <h3 className="user-card__name">{card.name}</h3>
        <p className="user-card__gender">
          <span className="item-name">{mockText.userSex} </span> {card.gender}
        </p>
        <p className="user-card__birthday">
          <span className="item-name">{mockText.userBDay} </span> {card.birthday}
        </p>
        <p className="user-card__salary">
          <span className="item-name">{mockText.userSalary} </span> {card.salary}
        </p>
        {isMailing ? (
          <p className="user-card__mailing user-card__mailing_yes">
            <span>{mockText.subscribed}</span> {mockText.toMailings}
          </p>
        ) : (
          <p className="user-card__mailing user-card__mailing_no">
            <span>{mockText.unsubscribed}</span> {mockText.fromMailings}
          </p>
        )}
      </div>
    );
  }
}

export default UserCard;
