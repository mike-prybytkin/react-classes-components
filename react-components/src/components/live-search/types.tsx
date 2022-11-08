export interface LiveSearchState {
  value: string;
}

export interface LiveSearchProps {
  onSearch: (querySearch: string) => void;
  placeholderText: string;
}
