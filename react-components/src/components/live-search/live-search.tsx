import React from 'react';
import { IProductCard } from 'share/types';
import { LiveSearchState } from './types';
import { LiveSearchProps } from './types';

class LiveSearch extends React.Component<LiveSearchProps, LiveSearchState> {
  constructor(props: LiveSearchProps) {
    super(props);
    this.state = {
      value: '',
    };
  }

  searchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      this.setState({ value: event.target.value });
    }
  };

  handleFilterCards(filterValue: string) {
    return this.props.cards.filter((item: IProductCard) => {
      return item.title.toLowerCase().includes(filterValue.toLowerCase().trim());
    });
  }

  setLocalStorage(searchFieldText: string) {
    localStorage.setItem('searchValue', searchFieldText);
  }

  componentDidMount(): void {
    this.setState({
      value: localStorage.getItem('searchValue') ?? '',
    });
  }

  componentDidUpdate(
    prevProps: Readonly<LiveSearchProps>,
    prevState: Readonly<LiveSearchState>
  ): void {
    if (prevProps.cards !== this.props.cards) {
      this.props.onSearch(this.handleFilterCards(this.state.value));
    }

    if (prevState.value !== this.state.value) {
      this.props.onSearch(this.handleFilterCards(this.state.value));
      this.setLocalStorage(this.state.value);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="search-container">
          <form className="search-form">
            <span>&#128269;</span>
            <input
              className="search"
              placeholder={this.props.placeholderText}
              value={this.state.value}
              onChange={this.searchTextChange}
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default LiveSearch;
