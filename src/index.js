import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'
// axios.defaults.baseURL = "http://localhost:5000/v1/api/"
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
