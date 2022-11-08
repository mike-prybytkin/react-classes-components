import React from 'react';
import { render } from '@testing-library/react';
import mockText from '../../../mocks/text';
import FileUpload from './file-upload';

const setUp = () => {
  return render(
    <FileUpload labelType={mockText.labelFileUpload} fileUploadRef={undefined} id={'test'} />
  );
};

describe('FileUpload component', () => {
  it('should correctly render date input with a className', () => {
    const { container } = setUp();
    expect(container.getElementsByClassName('file-upload').length).toBe(1);
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
