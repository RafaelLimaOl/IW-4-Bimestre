// Imports: 
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "../../App";

import Illustration from '../../Assets/Illustration.jpg'
import Logo from '../../Assets/Logo.png'
import './Login.css'

const Login = () => {

  // Redirecionamento das Rotas
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Mudar Formulário

  
  
  function ChangeForm() {

    const formSignIn = document.getElementById('SignIn');
    const formSignUp = document.getElementById('SignUp');


    if (formSignIn.style.display === "flex"){
      formSignIn.style.display = "none";
      formSignUp.style.display = "flex";
    } else {
      formSignIn.style.display = "flex";
      formSignUp.style.display = "none";
    }
  }

  // Obter valores dos Inputs:

    // Cadastro
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

    // Login
  const [findEmail, setFindEmail] = useState('');
  const [findPass, setFindPass] = useState('');



  return (

    <div className="form-Container">

        
        <div className="formSignIn" id="SignIn">

          <div className="Form"> 

            <div className="formText">
              <div className="slogan">
                <p>Costs</p><img src={Logo} alt="Logo" /><p>Connections</p>
              </div>
              <h1>Cadastro</h1>
            </div>        

            <div className="formInput">

              <input 
                type="text" 
                name="userName" 
                autoComplete="off" 
                required
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
                />
              <label htmlFor="name"><span>Nome</span></label>

            </div>

            <div className="formInput">

              <input 
                type="text" 
                name="userEmail" 
                autoComplete="off" 
                required
                onChange={(event) => {
                  setUserEmail(event.target.value);
                }}
                />
              <label htmlFor="name"><span>Email</span></label>

            </div>

            <div className="formInput">

              <input 
                type="password" 
                id="inputPassword" 
                name="userPass" 
                autoComplete="off" 
                required
                onChange={(event) => {
                  setUserPass(event.target.value);
                }}
                />
              <label htmlFor="name"><span>Senha</span></label>

            </div>

            <div className="btnForm">

              <button type="submit"
                onClick={() => {
                  console.log(user.loggedIn);
                  if (user.loggedIn) return;
                  setUser({ loggedIn: true });
                  
                  if (location.state?.from) {
                    navigate(location.state.from);
                  }
                }}
              >
              Cadastrar-se
              </button>
              <button onClick={ChangeForm}>Já possui Cadastro?</button>

            </div>
          </div>

          <div className="illustration">
            <img src={Illustration} alt="Illustration" />
          </div>

        </div>

        <div className="formSignUp" id="SignUp">

          <div className="Form"> 

            <div className="formText">
              <div className="slogan">
                <p>Costs</p><img src={Logo} alt="Logo" /><p>Connections</p>
              </div>
              <h1>Entrar</h1>
            </div>        

            <div className="formInput">

              <input 
                type="text" 
                name="userEmail" 
                autoComplete="off" 
                required
                onChange={(event) => {
                  setFindEmail(event.target.value);
                }}
                />
              <label htmlFor="name"><span>Email</span></label>

            </div>

            <div className="formInput">

              <input 
                type="password" 
                name="userPass" 
                autoComplete="off" 
                required
                onChange={(event) => {
                  setFindPass(event.target.value);
                }}
                />
              <label htmlFor="name"><span>Senha</span></label>

            </div>

            <div className="btnForm">

              <button onClick={ChangeForm}>Ainda não se Cadastrou?</button>
              <button type="submit"
                onClick={() => {
                  console.log(user.loggedIn);
                  if (user.loggedIn) return;
                  setUser({ loggedIn: true });
                  
                  if (location.state?.from) {
                    navigate(location.state.from);
                  }
                }}
              >
              Entrar
              </button>

            </div>
        
          </div>

          <div className="illustration">
            <img src={Illustration} alt="Illustration" />
          </div>

        </div>

    </div>

    );
  };
  
  export default Login;
  