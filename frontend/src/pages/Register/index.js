import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css';
import logoName from '../../assets/fabricaDeConsistencia.png';


function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoName} alt="" width="350" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e seja um trader de sucesso!</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#9b1d20" />
                        Voltar
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome" />
                    <input placeholder="Sobrenome" />

                    <div className="input-group">
                        <input placeholder="DDD" style={{ width: 85 }} />
                        <input placeholder="WhatsApp" />
                    </div>

                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <input type="password" placeholder="Repita senha" />



                    <div className="input-group">
                        <input placeholder="UF" style={{ width: 85 }} />

                        <input placeholder="Cidade" />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Register;