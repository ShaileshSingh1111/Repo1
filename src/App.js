import React from 'react';
import Footer from './footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to My React Website</h1>
      </header>
      <main>
        <p>This is the updated version of my React-based website!</p>
        <p>Here’s a new section with some info.</p>
      </main>
      <Footer />
    </div>
  );
}


function Home() {
  return <div><h2>Home Page</h2></div>;
}

function About() {
  return <div><h2>About Page</h2></div>;
}



export default App;
