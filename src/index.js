import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import {Provider as ReduxProvider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


const reduxStore = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
)
