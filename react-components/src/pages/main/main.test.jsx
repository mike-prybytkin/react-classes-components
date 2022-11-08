import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from './main';
import { mockCards } from '../../mocks/cards';
import mockText from '../../mocks/text';

const setUp = () =>
  render(<Main cards={mockCards} heading={mockText.headingMain} />, { wrapper: BrowserRouter });

describe('Main component', () => {
  it('should correctly render heading', () => {
    setUp();
    const mainHeading = screen.getByText(new RegExp(mockText.headingMain, 'i'));
    expect(mainHeading).toBeInTheDocument();
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
