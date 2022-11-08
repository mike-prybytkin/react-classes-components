import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Page404 from './404';
import mockText from '../../mocks/text';

const setUp = () =>
  render(<Page404 heading={mockText.heading404} backToHomelinkText={mockText.linkBackToHome} />, {
    wrapper: BrowserRouter,
  });

describe('Page 404 component', () => {
  it('should correctly render heading', () => {
    setUp();
    const page404Heading = screen.getByText(new RegExp(mockText.heading404, 'i'));
    expect(page404Heading).toBeInTheDocument();
  });

  it('should correctly render link', () => {
    setUp();
    const linkHome = screen.getByText(new RegExp(mockText.linkBackToHome, 'i'));
    expect(linkHome).toBeInTheDocument();
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
