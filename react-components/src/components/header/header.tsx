import React from 'react';
import NavBar from 'components/nav-bar/nav-bar';
import LiveSearch from 'components/live-search/live-search';
import { HeaderProps } from './types';
import mockText from 'mocks/text';

class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <NavBar />
        <LiveSearch
          cards={this.props.cards}
          onSearch={this.props.onSearch}
          placeholderText={mockText.searchPlaceholder}
        />
      </header>
    );
  }
}

export default Header;
