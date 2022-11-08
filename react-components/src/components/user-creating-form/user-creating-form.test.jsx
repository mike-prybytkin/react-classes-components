import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserCreatingForm from './user-creating-form';

const setUp = () =>
  render(<UserCreatingForm />, {
    wrapper: BrowserRouter,
  });

describe('User Creating Form component', () => {
  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
