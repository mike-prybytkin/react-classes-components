import { ICard } from 'share/types';

export interface IAppState {
  data: ICard[];
  isLoading: boolean;
  currentData: ICard[];
  fetchError: unknown;
}
