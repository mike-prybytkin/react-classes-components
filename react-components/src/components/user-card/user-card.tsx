import React, { Component } from 'react';
import { UserCardProps } from './types';

class UserCard extends Component<UserCardProps> {
  render() {
    return (
      <div className="user-card">
        <img
          className="user-card__avatar"
          src={this.props.card.avatarPath}
          alt={this.props.card.name}
        />
        <h3 className="user-card__name">{this.props.card.name}</h3>
        <p className="user-card__gender">
          <span className="item-name">sex:</span> {this.props.card.gender}
        </p>
        <p className="user-card__birthday">
          <span className="item-name">b-day:</span> {this.props.card.birthday}
        </p>
        <p className="user-card__salary">
          <span className="item-name">salary: </span> {this.props.card.salary}
        </p>
        {this.props.card.mailing ? (
          <p className="user-card__mailing user-card__mailing_yes">
            <span>Subscribed</span> to mailings!
          </p>
        ) : (
          <p className="user-card__mailing user-card__mailing_no">
            <span>Unsubscribed</span> from mailings...
          </p>
        )}
      </div>
    );
  }
}

export default UserCard;
