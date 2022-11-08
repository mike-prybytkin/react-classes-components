import { IProductCard } from 'share/types';

export type MainProps = {
  cards: IProductCard[];
  heading: string;
  queryPage: number;
  allPages: number;
  cardsLimit: number;
  updateQuery: (queryPage: number) => void;
};
