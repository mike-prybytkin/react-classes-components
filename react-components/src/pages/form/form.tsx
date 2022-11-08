import React, { Component } from 'react';
import { FormProps } from './types';
import CreateUserForm from 'components/user-creating-form/user-creating-form';
import UserCardList from 'components/user-card-list/user-card-list';
import { getItemLocalSrorage, setItemLocalSrorage } from 'utils/localStorage/locatStorage';
import { FormState } from './types';
import { IUserCard } from 'share/types';

export default class Form extends Component<FormProps, FormState> {
  state = {
    userCards: [],
  };

  componentDidMount() {
    this.setState({
      userCards: getItemLocalSrorage('createdUsers'),
    });
  }

  onForm = (newUser: IUserCard) => {
    setItemLocalSrorage('createdUsers', newUser);
    this.setState({
      userCards: getItemLocalSrorage('createdUsers'),
    });
  };

  render() {
    const hasUserCards = this.state.userCards && this.state.userCards.length > 0;
    return (
      <div className="form-wrapper">
        <h1 className="form-content-header">{this.props.heading}</h1>
        <div className="form-content-wrapper">
          <CreateUserForm onForm={this.onForm} />

          {hasUserCards ? (
            <UserCardList cards={this.state.userCards} />
          ) : (
            <p className="form-content-message">{this.props.noCreatedUserMessage}</p>
          )}
        </div>
      </div>
    );
  }
}
