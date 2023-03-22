import React from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  //<Cards />
  return (
    <div className="App" id='app'>
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
