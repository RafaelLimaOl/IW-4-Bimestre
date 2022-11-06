
import React from 'react'
import { useContext } from "react";
import { UserContext } from "../../App";

import './Footer.css'

function Footer() {

    const { user, setUser } = useContext(UserContext);

  return (
    <div className='footer'>

      <div className="content">

        <div className="tooltip">LogOut</div>
        <button className='btnLogOut'
          onClick={() => {
            if (!user.loggedIn) return;
            setUser({ loggedIn: false });
          }}
          >
          <span className="material-icons-round">logout</span>
        </button>

      </div>
    </div>
  )
}

export default Footer