import React from 'react';
import ReactDOM from 'react-dom';

fetch('http://www.omdbapi.com/?s=Star%20Wars&plot=short&r=json')
  .then(res => res.json())
  .then(movies => {

  });

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
