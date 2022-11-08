import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import { mockCards } from '../../mocks/cards';
import mockText from '../../mocks/text';

const setUp = () =>
  render(<Header cards={mockCards} onSearch={mockCards} />, { wrapper: BrowserRouter });

describe('Header component', () => {
  it('should render links container', () => {
    setUp();
    expect(screen.queryByRole('list')).toBeInTheDocument();
  });

  it('should render link to About page', () => {
    setUp();
    const linkAbout = screen.getByText(new RegExp(mockText.aboutLink, 'i'));
    expect(linkAbout).toBeInTheDocument();
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
