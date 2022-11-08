import React from 'react';
import { AboutUsProps } from './types';

class AboutUs extends React.Component<AboutUsProps> {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.heading}</h1>
        <p className="sorry-message">{this.props.message}</p>
      </React.Fragment>
    );
  }
}

export default AboutUs;
