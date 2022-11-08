import { ICard } from 'share/types';

export interface ILiveSearchState {
  value: string;
}

export interface ILiveSearchProps {
  cards: ICard[];
  onSearch: (cards: ICard[]) => void;
  placeholderText: string;
}
