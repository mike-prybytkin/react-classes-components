import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from 'pages/about-us/about-us';
import Page404 from 'pages/404/404';
import Main from 'pages/main/main';
import Header from 'components/header/header';
import { IProductCard } from 'share/types';
import { AppState } from './types';
import mockText from 'mocks/text';
import Form from 'pages/form/form';

class App extends React.Component<unknown, AppState> {
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
      const cards: IProductCard[] = await response.json();
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

  onSearch(cards: IProductCard[]) {
    this.setState({
      currentData: cards,
    });
  }

  render() {
    const { isLoading } = this.state;
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
              path="/form"
              element={
                <Form
                  heading={mockText.headingForm}
                  noCreatedUserMessage={mockText.notCreatedUserInForm}
                />
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
          {isLoading && <p className="main__message_loading">{mockText.loading}</p>}
          {/* Следующий компонент в третьей таске я выношу в отрисовку карточек. Трогать не буду */}
          {this.state.currentData.length === 0 && !this.state.isLoading && (
            <p className="main__message_not-found">{mockText.itemNotFound}</p>
          )}
        </main>
      </div>
    );
  }
}

export default App;
