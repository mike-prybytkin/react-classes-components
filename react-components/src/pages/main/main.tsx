import React from 'react';
import CardList from 'components/card-list/card-list';
import { MainProps } from './types';

class Main extends React.Component<MainProps> {
  constructor(props: MainProps) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.heading}</h1>
        <CardList cards={this.props.cards} />
      </React.Fragment>
    );
  }
}

export default Main;
