import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';
import './styles/index.scss';
import store from './store/store';
import { PublicRoute } from './routers/PublicRoute';
import { PrivateRoute } from './routers/PrivateRoute';
import { Login } from './components/pages/login/Login';
import { Player } from './components/pages/player/Player';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
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
  //</React.StrictMode>
)