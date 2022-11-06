// Imports:

import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Loading from '../Loading';

import '../Global.css';
import './Projects.css';

function Enviar() {
  console.log("Gotcha")
}

function Projects() {
  return (
    <div className='projects'>

      <Loading/>

      <NavBar/>
      
      <div className="container">
        <h1>Comece agora o seu projeto!</h1>
        <p>Comece o projeto e depois adicione serviços</p>
        <div value className='project-costs' onSubmit={Enviar}>
          <h1>Projeto</h1>

          <div className="input-Field">
            <input type="text" name='projeto-nome' placeholder='Insira o Nome do Projeto'/>
            <label htmlFor="name">Nome: </label>
          </div>

          <div className="input-Field" id='Project-Orcamento'>
            <input type="number" name='orcamento' placeholder='Valor Máximo'/>
            <input type="number" name='orcamento' placeholder='Valor Mínimo'/>
            <label htmlFor="name">Orçamento: </label>
          </div>

          <div className="input-Field">

            <label htmlFor="name">Categoria</label>

            <select name="categoria" defaultValue={'Default'}>
              <option value="Default" disabled>Selecione uma Categoria</option>
              <option value="design">Design</option>
              <option value="front-end">FrontEnd</option>
              <option value="back-end">BackEnd</option>
              <option value="full-stack">FullStack Application</option>
            </select>

            <span className="arrow">
              <span className="material-icons-round">expand_more</span>
            </span>

          </div>

          <input type="submit" value="Criar" />
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Projects