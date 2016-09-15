import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var PLAYERS = [
  {
    name: "Blake Yoder",
    score: 17,
    id: 1,
  },
  {
    name: "John Doe",
    score: 27,
    id: 2,
  },
  {
    name: "Jane Doe",
    score: 7,
    id: 3,
  },
]

ReactDOM.render(
  <App players={PLAYERS}/>,
  document.getElementById('root')
);
