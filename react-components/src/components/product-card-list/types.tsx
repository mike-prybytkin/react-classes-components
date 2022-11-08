import { IProductCard } from 'share/types';

export type CardListProps = {
  cards: IProductCard[];
  queryPage: number;
  allPages: number;
  cardsLimit: number;
  updateQuery: (queryPage: number) => void;
};
