import { IProductCard } from 'share/types';

export interface AppState {
  data: IProductCard[];
  isLoading: boolean;
  fetchError: unknown;
  querySearch: string;
  queryPage: number;
  allPages: number;
  cardsLimit: number;
}

export interface IFetchData {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: IProductCard[];
}
