import React, { Component } from 'react';
import { PaginationProps, PaginationState } from './types';
import mockText from 'mocks/text';

export default class Pagination extends Component<PaginationProps, PaginationState> {
  constructor(props: PaginationProps) {
    super(props);
    this.state = {
      arrayForButtons: [],
      currentPage: 1,
    };
  }

  componentDidMount(): void {
    this.preparingArrayButtons();
    this.setState({
      currentPage: this.props.queryPage,
    });
  }

  componentDidUpdate(
    prevProps: Readonly<PaginationProps>,
    prevState: Readonly<PaginationState>
  ): void {
    if (prevProps.allPages !== this.props.allPages) {
      this.preparingArrayButtons();
    }

    if (prevState.currentPage !== this.state.currentPage) {
      this.props.updateQuery(this.state.currentPage);
    }
  }

  preparingArrayButtons() {
    const newArray = [];
    for (let i = 1; i <= this.props.allPages; i++) {
      newArray.push(i);
    }

    this.setState({
      arrayForButtons: newArray,
    });
  }

  prevPage = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  nextPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  changePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const pageNumber = Number((event.target as HTMLElement).textContent);
    this.props.updateQuery(pageNumber);
    this.setState({
      currentPage: pageNumber,
    });
  };

  render() {
    return this.props.allPages > 1 ? (
      <div className="pagination-wrapper">
        <button
          className="pagination-prev-button"
          onClick={this.prevPage}
          disabled={this.state.currentPage === 1}
        >
          {mockText.prevButton}
        </button>
        <div className="numerical-buttons-wrapper">
          {this.state.arrayForButtons.map((numButton) => {
            return (
              <button
                key={numButton}
                className={
                  numButton === this.state.currentPage
                    ? 'numerical-button active'
                    : 'numerical-button'
                }
                onClick={(event) => this.changePage(event)}
              >
                {numButton}
              </button>
            );
          })}
        </div>
        <button
          className="pagination-next-button"
          onClick={this.nextPage}
          disabled={this.state.currentPage === this.props.allPages}
        >
          {mockText.nextButton}
        </button>
      </div>
    ) : (
      ''
    );
  }
}
