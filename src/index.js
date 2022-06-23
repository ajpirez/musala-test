import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');


ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
