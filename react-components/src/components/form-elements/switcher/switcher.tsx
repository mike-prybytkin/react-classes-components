import React, { Component } from 'react';
import { SwitcherProps } from './types';

class Switcher extends Component<SwitcherProps> {
  render() {
    return (
      <div className="switcher-wrapper">
        <p className="switcher-wrapper__header">{this.props.switcherType}</p>
        <div className="switcher-wrapper__field">
          <input
            type="radio"
            id={this.props.idRadioOne}
            name="switch-one"
            value={this.props.optionOne}
            ref={this.props.switcherRef}
            defaultChecked
          />
          <label htmlFor={this.props.idRadioOne}>{this.props.optionOne}</label>

          <input
            type="radio"
            id={this.props.idRadioTwo}
            name="switch-one"
            value={this.props.optionTwo}
          />
          <label htmlFor={this.props.idRadioTwo}>{this.props.optionTwo}</label>
        </div>
      </div>
    );
  }
}

export default Switcher;
