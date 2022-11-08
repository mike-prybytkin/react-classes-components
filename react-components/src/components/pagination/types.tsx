export interface PaginationProps {
  queryPage: number;
  allPages: number;
  cardsLimit: number;
  updateQuery: (queryPage: number) => void;
}

export interface PaginationState {
  arrayForButtons: number[];
  currentPage: number;
}
