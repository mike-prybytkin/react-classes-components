import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { mockCards } from '../../mocks/cards';
import mockText from '../../mocks/text';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ mockCards }),
  })
);

const setUp = () => render(<App />, { wrapper: BrowserRouter });

describe('App', () => {
  it('should correctly render app structure', async () => {
    const { findByTestId } = setUp();
    const appNode = await findByTestId('app');
    expect(appNode.children).toHaveLength(2);
  });

  it('should correctly render the heading of the homepage', async () => {
    setUp();
    expect(await screen.findByText(new RegExp(mockText.headingMain, 'i'))).toBeInTheDocument();
  });

  it('should create snapshot', () => {
    const { asFragment } = setUp();
    expect(asFragment()).toMatchSnapshot();
  });
});
