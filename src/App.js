import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Project4 from './components/project4/Project4';
import Project3 from './components/project3/project3';
import Project2 from './components/project2/Project2';
import Project1 from './components/project1/Project1';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Project4 />
      <Project3 />
      <Project2 />
      <Project1 />
      <Contact />
    </>
  );
}

export default App;
