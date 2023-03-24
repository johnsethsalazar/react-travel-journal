import React from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import data from './data'


export default function App() {
  const cards = data.map(item => {
    return(
      <Cards 
        {...item}
      />
    )
  })
  return (
    <div className="App" id='app'>
      <Header />
      <section className='cards-list'>
        {cards}
      </section>
      <Footer />
    </div>
  );
}
