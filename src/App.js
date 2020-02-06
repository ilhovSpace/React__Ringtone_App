import React from 'react';
import './App.css';
import Header from './components/general/header/Header'
import Footer from './components/general/Footer'
import Logo from './components/general/header/Logo/Logo'


function App(props) {
  return (
    <div className="container App-header">
      <Logo></Logo>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
