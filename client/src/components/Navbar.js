import React from 'react';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <img src={logo} alt='logo' />
                <li><NavLink to='/'>Asociación de Usuarios Acueducto <br />Regional Zipacon Cachipay y La Mesa</NavLink></li>
                <li><NavLink to='/'>ACUAZICAME</NavLink></li>

                <li><NavLink to='/'>Documentos de interés</NavLink></li>

                <li><NavLink to='/'>Organigrama</NavLink></li>

                <li><NavLink to='/'>Directorio</NavLink></li>

                <li><NavLink to='/'>Contáctanos</NavLink></li>
            </ul>
        </nav>
    )
}
