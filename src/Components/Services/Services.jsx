import React from 'react';
import Footer from '../Footer/Footer';
import Loading from '../Loading';
import NavBar from '../NavBar/NavBar';

import '../Global.css';
import './Services.css';

function Services() {
  return (
    <div className='container'>

      <Loading />

      <NavBar />

      <div className="services">
        <h1>Services Page</h1>
      </div>

      <Footer />

    </div>
  )
}

export default Services