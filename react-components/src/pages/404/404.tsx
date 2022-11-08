import React from 'react';
import { Link } from 'react-router-dom';
import { Page404Props } from './types';

class Page404 extends React.Component<Page404Props> {
  render() {
    return (
      <div className="main-container">
        <h1>{this.props.heading}</h1>
        <Link className="back-to-home-link" to="/">
          {this.props.backToHomelinkText}
        </Link>
      </div>
    );
  }
}

export default Page404;
