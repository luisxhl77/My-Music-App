import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import React from 'react';
import './styles/index.scss';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
)