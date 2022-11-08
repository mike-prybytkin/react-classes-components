import React from 'react';
import { render, screen } from '@testing-library/react';
import { mockUserCards } from '../../mocks/user-cards';
import UserCardList from './user-card-list';

const setUp = (props) => render(<UserCardList cards={props} />);

describe('UserCardList component', () => {
  it('should render card list without data', () => {
    setUp([]);
    expect(screen.queryByRole('heading')).toBeNull();
  });

  it('should correctly render headings', () => {
    setUp(mockUserCards);
    expect(screen.queryAllByRole('heading', { level: 3 })).toMatchSnapshot();
  });

  it('create card list snapshot with data', () => {
    const { asFragment } = setUp(mockUserCards);
    expect(asFragment()).toMatchSnapshot();
  });
});
