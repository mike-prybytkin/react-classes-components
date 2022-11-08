import { IProductCard } from 'share/types';

export interface LiveSearchState {
  value: string;
}

export interface LiveSearchProps {
  cards: IProductCard[];
  onSearch: (cards: IProductCard[]) => void;
  placeholderText: string;
}
