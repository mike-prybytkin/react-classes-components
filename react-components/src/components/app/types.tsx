import { IProductCard } from 'share/types';

export interface AppState {
  data: IProductCard[];
  isLoading: boolean;
  currentData: IProductCard[];
  fetchError: unknown;
}
