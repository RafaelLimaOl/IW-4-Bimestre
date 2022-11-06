
import React from 'react';
import Logo from '../Assets/logo-editor.png';

import './Global.css';

function Loading() {

  setTimeout(function(){ 

    const loading = document.getElementById('Load-Container');
    const content = document.getElementById('content');

    loading.style.transition ="opacity 1.5s ease-in";
    loading.style.opacity = "0";
    // loading.parentNode.removeChild(loading);
    loading.style.zIndex = "-9999";

  }, 2000)

  return (

    <div id='Load-Container'>
  
      <div className="loading" id='content'>

        <img src={Logo} alt="" />

        <p className="loading">Loading</p>
        <div className="bubble-container">
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
      </div>
    </div>

  )

}

export default Loading