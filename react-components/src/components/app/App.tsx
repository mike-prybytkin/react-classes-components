import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from 'pages/about-us/about-us';
import Page404 from 'pages/404/404';
import Main from 'pages/main/main';
import Header from 'components/header/header';
import { ICard } from 'share/types';
import { IAppState } from './types';
import mockText from 'mocks/text';

class App extends React.Component<unknown, IAppState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      currentData: [],
      fetchError: '',
    };
    this.onSearch = this.onSearch.bind(this);
  }

  async fetchCards() {
    const URL = 'https://fakestoreapi.com/products?limit=20';
    this.setState({ isLoading: true });
    try {
      const response = await fetch(URL);
      const cards: ICard[] = await response.json();
      this.setState({
        data: cards,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        fetchError: error,
      });
    }
  }

  componentDidMount() {
    this.fetchCards();
  }

  onSearch(cards: ICard[]) {
    this.setState({
      currentData: cards,
    });
  }

  render() {
    return (
      <div className="App" data-testid="app">
        <Header cards={this.state.data} onSearch={this.onSearch} />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={<Main cards={this.state.currentData} heading={mockText.headingMain} />}
            />
            <Route
              path="/about"
              element={
                <AboutUs heading={mockText.headingAboutUs} message={mockText.pageNotReady} />
              }
            />
            <Route
              path="/notFound"
              element={
                <Page404
                  heading={mockText.heading404}
                  backToHomelinkText={mockText.linkBackToHome}
                />
              }
            />
            <Route path="/*" element={<Navigate to="/notFound" />} />
          </Routes>
          {this.state.isLoading && <p className="main__message_loading">{mockText.loading}</p>}
          {this.state.currentData.length === 0 && !this.state.isLoading && (
            <p className="main__message_not-found">{mockText.itemNotFound}</p>
          )}
        </main>
      </div>
    );
  }
}

export default App;
