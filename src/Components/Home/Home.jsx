import React from 'react';
import LinkButton from '../../LinkButton';
import Footer from '../Footer/Footer';
import Loading from '../Loading';
import NavBar from '../NavBar/NavBar';

import './Home.css';


function Home() {

  return (
    <div className='container' id='homePage'>

      <Loading />

      <NavBar />

      <div className="home">

        <div className="homeContainer">

          <h1>Bem Vindo ao Costs</h1>

          <p>Gerencie seus Projetos Agora mesmo!</p>

          <LinkButton to={"/projects"} text="Criar Um Projeto" />
          <span className="material-icons-round">arrow_forward</span>
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Home