import { ICard } from 'share/types';

export type HeaderProps = {
  cards: ICard[];
  onSearch: (cards: ICard[]) => void;
};
