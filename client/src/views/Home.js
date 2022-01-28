import React from 'react';
// import axios from 'axios';
// import swal from 'sweetalert';
import { Navbar } from '../components/Navbar.js';
import { Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import contrato from '../assets/contrato.png'
import pesos from '../assets/pesos.png'
import email from '../assets/email.png'

const { Title } = Typography;

export const Home = () => {

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <section>
                <Title>Acuazicame</Title>
            </section>
            <section className='home_links'>
                <img src={contrato} alt='contrato' />
                <NavLink to='/'>Consulta tu <br />factura</NavLink>
                <img src={pesos} alt='pesos' />

                <NavLink to='/'>Paga aquí tu <br /> factura</NavLink>
                <img src={email} alt='email' />

                <NavLink to='/'>Registra aquí tu petición <br /> queja, reclamo o <br /> sugerencia</NavLink>
            </section>
        </div>
    )
}
