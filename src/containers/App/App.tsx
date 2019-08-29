import React from 'react';
import './App.scss';

import Header from 'components/Header';
import Routes from 'components/Routes';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Routes /> 
      </div>
    </div>
  );
}

export default App;
