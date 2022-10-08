import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import AboutUs from 'pages/about-us/about-us';
import Page404 from 'pages/404/404';
import Main from 'pages/main/main';
import Header from 'components/header/header';
import { ICard } from 'share/types';
import { IAppState } from './types';

class App extends React.Component<unknown, IAppState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      currentData: [],
    };
    this.onSearch = this.onSearch.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await axios.get<ICard[]>('https://fakestoreapi.com/products?limit=20');
    this.setState({
      data: response.data,
      isLoading: false,
      currentData: response.data,
    });
  }

  onSearch(cards: ICard[]) {
    this.setState({
      currentData: cards,
    });
  }

  render() {
    console.log({ state: this.state });
    return (
      <div className="App">
        <Header cards={this.state.data} onSearch={this.onSearch} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Main cards={this.state.currentData} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/notFound" element={<Page404 />} />
            <Route path="/*" element={<Navigate to="/notFound" />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
