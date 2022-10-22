import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store';
import { PublicRoute, PrivateRoute } from './routers';
import { Login, Player } from './components/pages';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        
        <Routes>

          <Route path="/*" element={
            <PrivateRoute>
              <Player/>
            </PrivateRoute>
          }/>

          <Route path="/login" element={
            <PublicRoute>
              <Login/>
            </PublicRoute>
          }/>
        
        </Routes>
      
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)