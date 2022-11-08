import { IProductCard } from 'share/types';

export interface ProductCardProps {
  card: IProductCard;
  buttonText: string;
}

export interface ProductCardState {
  isOpenModalWindow: boolean;
  clickedCard: IClikedCard;
}

export type IClikedCard = Pick<
  IProductCard,
  'name' | 'image' | 'status' | 'species' | 'type' | 'gender' | 'location'
>;
