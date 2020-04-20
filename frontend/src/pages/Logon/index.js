import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/fabricaDeConsistenciaLogo.png';
import logoName from '../../assets/fabricaDeConsistencia.png';

function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoName} alt="" width="350"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#9b1d20"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={logo} alt="Fabrica de consistência" width="410"/>
        </div>
    )
}

export default Logon;