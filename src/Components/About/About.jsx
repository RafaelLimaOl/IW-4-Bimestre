import React from 'react';

import Footer from '../Footer/Footer';
import Loading from '../Loading';
import NavBar from '../NavBar/NavBar';

import './About.css';
import '../Global.css';

function About() {
  return (
    <div className='container'>

      <Loading />

      <NavBar />

      <div className="about">
        <h1>About Page</h1>
      </div>

      <Footer />
    </div>
  )
}

export default About