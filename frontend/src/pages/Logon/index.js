import React, { useState } from 'react';
import './styles.css';

import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';


function Logon() {
    const history = useHistory();
    const [id, setId] = useState('');

    async function handleLogin(event){
        event.preventDefault();

        try {
            const response = await api.post('sessions', { id });
            console.log(response.data.name);

            localStorage.setItem('ongID', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (error) {
            alert("Não foi possível efetuar login. Tente novamente.");
        }
    }

    return (
        <div className="logon-container">
            <section className="form" onSubmit={handleLogin}>
                <img src={logoImg} alt="Be the hero"/>
                <form>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
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