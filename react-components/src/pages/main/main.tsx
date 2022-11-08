import React from 'react';
import CardList from 'components/product-card-list/product-card-list';
import { MainProps } from './types';

class Main extends React.Component<MainProps> {
  constructor(props: MainProps) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.heading}</h1>
        <CardList
          cards={this.props.cards}
          queryPage={this.props.queryPage}
          allPages={this.props.allPages}
          cardsLimit={this.props.cardsLimit}
          updateQuery={this.props.updateQuery}
        />
      </React.Fragment>
    );
  }
}

export default Main;
