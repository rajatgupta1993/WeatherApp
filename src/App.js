import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
