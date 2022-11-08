import React, { Component } from 'react';
import { ModalWindowProps } from './types';

export default class ModalWindow extends Component<ModalWindowProps> {
  render() {
    const { onModalWindow } = this.props;
    return (
      <div className="modal-overlay" onClick={onModalWindow}>
        <div className="modal-window" onClick={(e) => e.stopPropagation()}>
          <button className="modal-window__close" onClick={onModalWindow}>
            &#10007;
          </button>
          <div className="modal-window__body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
