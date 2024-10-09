import React from 'react';
import './LoginForm.css';
import {FaLock, FaUser } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form >
            <h1> CONNEXION</h1>
            <div className="input-box">
                <input type="text" placeholder='Nom' required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="passeword" placeholder='Mot de passe ' required />
                <FaLock className='icon'/>
            </div>

            <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Oublie  
                </label>
                <a href="#"> Mot de passe oublié</a>
            </div>

            <button type='submit'> Connexion</button>

            <div className="register-link">
                <p>Vous n'avez pas de compte?<a href='#'> Crée un Compte</a> </p>
            </div>
        </form>

    </div>
  )
}

export default LoginForm
