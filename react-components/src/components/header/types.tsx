import { IProductCard } from 'share/types';

export type HeaderProps = {
  cards: IProductCard[];
  onSearch: (cards: IProductCard[]) => void;
};
