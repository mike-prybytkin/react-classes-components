import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switcher from './switcher';
import mockText from 'mocks/text';

const setUp = () =>
  render(
    <Switcher
      switcherRef={undefined}
      switcherType={mockText.switcherGender}
      optionOne={mockText.switcherGenderMale}
      optionTwo={mockText.switcherGenderFemale}
      idRadioOne={'one'}
      idRadioTwo={'two'}
    />
  );

describe('Switcher component', () => {
  it('should switch radio-button', () => {
    const { getByLabelText } = setUp();
    const radioMale = getByLabelText(mockText.switcherGenderMale) as HTMLInputElement;
    fireEvent.change(radioMale, { target: { value: mockText.switcherGenderFemale } });
    expect(radioMale.value).toBe(mockText.switcherGenderFemale);
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
