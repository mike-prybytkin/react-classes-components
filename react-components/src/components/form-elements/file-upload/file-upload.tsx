import React, { Component } from 'react';
import { FileUploadProps } from './types';

class FileUpload extends Component<FileUploadProps> {
  render() {
    return (
      <div className="file-upload">
        <label className="file-upload__label">
          <input
            className="file-upload__input"
            type="file"
            id={this.props.id}
            name={this.props.id}
            accept="image/*"
            ref={this.props.fileUploadRef}
            required={this.props.required}
          />
          {this.props.labelType}
        </label>
      </div>
    );
  }
}

export default FileUpload;
