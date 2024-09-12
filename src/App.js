import './App.css';
import Navbar from './components/Navbar';
// import News from './components/PractiveNews';
import News from './components/News';
// import React from 'react';
// import React, { useEffect, useState } from 'react';

export default function App() {
  // var url = 'https://jsonplaceholder.typicode.com/users'

  // var req = new Request(url);

  // fetch(req).then(function (response) {
  //   console.log(response.json());
  // })


  return (
    <>
      <header>
        <div className="container">
          <Navbar />
        </div>
      </header>

      <section className='news-section'>
        <div className="container">
          <News />
        </div>
      </section>

      

    </>
  )
}



