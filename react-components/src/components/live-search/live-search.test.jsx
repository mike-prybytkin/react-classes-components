import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LiveSearch from './live-search';
import { mockCards } from '../../mocks/cards';
import mockText from '../../mocks/text';

const setUp = () =>
  render(
    <LiveSearch
      cards={mockCards}
      onSearch={mockCards}
      placeholderText={mockText.searchPlaceholder}
    />,
    {
      wrapper: BrowserRouter,
    }
  );

describe('Live Search component', () => {
  it('should correctly render input', () => {
    setUp();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should correctly render placeholder', () => {
    setUp();
    expect(
      screen.getByPlaceholderText(new RegExp(mockText.searchPlaceholder, 'i'))
    ).toBeInTheDocument();
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
