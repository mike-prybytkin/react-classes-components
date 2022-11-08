import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCardList from './product-card-list';
import { mockCards } from '../../mocks/cards';

const setUp = (props) => render(<ProductCardList cards={props} />);

describe('Card list component', () => {
  it('should render card list without data', () => {
    setUp([]);
    expect(screen.queryByRole('heading')).toBeNull();
  });

  it('should correctly render headings', () => {
    setUp(mockCards);
    expect(screen.queryAllByRole('heading', { level: 3 })).toMatchSnapshot();
  });

  it('create card list snapshot with data', () => {
    const { asFragment } = setUp(mockCards);
    expect(asFragment()).toMatchSnapshot();
  });
});
