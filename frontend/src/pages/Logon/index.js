import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import { FiLogIn } from 'react-icons/fi';


function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero"/>
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"/>
                    <button className= "button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/> 
                        Não tenho cadastro</Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}

export default Logon;