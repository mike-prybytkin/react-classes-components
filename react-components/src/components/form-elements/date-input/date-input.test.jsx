import React from 'react';
import { render } from '@testing-library/react';
import mockText from '../../../mocks/text';
import DateInput from './date-input';

const setUp = () => {
  return render(
    <DateInput
      labelType={mockText.labelUserBirthday}
      defaultValue="2000-01-01"
      inputDateRef={undefined}
      id={'test'}
    />
  );
};

describe('DateInput component', () => {
  it('should correctly render date input with a className', () => {
    const { container } = setUp();
    expect(container.getElementsByClassName('user-birthday__label').length).toBe(1);
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
