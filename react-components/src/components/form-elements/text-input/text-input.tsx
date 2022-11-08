import React, { Component } from 'react';
import { TextInputProps } from './types';

class TextInput extends Component<TextInputProps> {
  render() {
    return (
      <div className="text-input">
        <label className="text-input__label">
          {this.props.labelType}
          <input
            className="text-input__input"
            type="text"
            placeholder={this.props.placeholderText}
            minLength={+this.props.minTextLength}
            maxLength={+this.props.maxTextLength}
            required={this.props.required}
            ref={this.props.inputTextRef}
            id={this.props.id}
          />
        </label>
      </div>
    );
  }
}

export default TextInput;
