import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Form from './form';
import mockText from '../../mocks/text';

const setUp = () =>
  render(
    <Form heading={mockText.headingForm} noCreatedUserMessage={mockText.notCreatedUserInForm} />,
    {
      wrapper: BrowserRouter,
    }
  );

describe('Page Form component', () => {
  it('should correctly render heading', () => {
    setUp();
    const pageFormHeading = screen.getByText(new RegExp(mockText.headingForm, 'i'));
    expect(pageFormHeading).toBeInTheDocument();
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
