import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Greeting/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
