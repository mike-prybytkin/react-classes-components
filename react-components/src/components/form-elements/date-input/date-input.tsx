import React, { Component } from 'react';
import { DateInputProps } from './types';

class DateInput extends Component<DateInputProps> {
  render() {
    return (
      <div className="date-input">
        <label className="date-input__label">
          {this.props.labelType}
          <input
            className="date-input__input"
            type="date"
            defaultValue={this.props.defaultValue}
            min={this.props.minDate}
            max={this.props.maxDate}
            ref={this.props.inputDateRef}
            id={this.props.id}
          />
        </label>
      </div>
    );
  }
}

export default DateInput;
