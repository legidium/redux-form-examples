import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './store';

import './styles.css';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox 1</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
