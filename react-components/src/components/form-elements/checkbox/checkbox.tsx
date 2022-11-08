import React, { Component } from 'react';
import { CheckboxProps } from './types';

class Checkbox extends Component<CheckboxProps> {
  render() {
    return (
      <div className="checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          id={this.props.id}
          ref={this.props.checkboxRef}
          defaultChecked
        />
        <label className="checkbox__label" htmlFor={this.props.id}>
          {this.props.labelType}
        </label>
      </div>
    );
  }
}

export default Checkbox;
