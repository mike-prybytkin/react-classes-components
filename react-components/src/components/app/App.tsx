import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from 'pages/about-us/about-us';
import Page404 from 'pages/404/404';
import Main from 'pages/main/main';
import Header from 'components/header/header';
import { AppState } from './types';
import mockText from 'mocks/text';
import Form from 'pages/form/form';
import { IFetchData } from './types';

class App extends React.Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      fetchError: '',
      querySearch: '',
      queryPage: 1,
      allPages: 0,
      cardsLimit: 20,
    };
  }

  async fetchData() {
    const BASE_URL = `https://rickandmortyapi.com/api/character/`;
    this.setState({ isLoading: true });
    try {
      const response = await fetch(
        `${BASE_URL}?name=${this.state.querySearch}&page=${this.state.queryPage}`
      );
      const fetchData: IFetchData = await response.json();
      this.setState({
        data: fetchData.results,
        allPages: fetchData.info.pages,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        data: [],
        fetchError: error,
        isLoading: false,
        queryPage: 1,
      });
    }
  }

  updateQuery = (queryPage: number) => {
    this.setState({
      queryPage: queryPage,
    });
  };

  onSearch = (querySearch: string) => {
    this.setState({
      querySearch: querySearch,
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps: Readonly<unknown>, prevState: Readonly<AppState>): void {
    if (
      prevState.querySearch !== this.state.querySearch ||
      prevState.queryPage !== this.state.queryPage
    ) {
      this.fetchData();
    }
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="App" data-testid="app">
        <Header onSearch={this.onSearch} />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  cards={this.state.data}
                  heading={mockText.headingMain}
                  queryPage={this.state.queryPage}
                  allPages={this.state.allPages}
                  cardsLimit={this.state.cardsLimit}
                  updateQuery={this.updateQuery}
                />
              }
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
        </main>
      </div>
    );
  }
}

export default App;
