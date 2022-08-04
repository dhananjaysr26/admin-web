import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../images/logo.jpeg'
import '../styles/Navbar.css'
function Navbar() {
    // let navigate = useNavigate();
    return (
        <nav className='navBar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo' />
                <label>basys.ai</label>
            </div>
            <div className='nav_links'>
                <ul >
                    <li ><a href='/' className='active'>Analytics</a></li>
                    <li ><a href='/'>Patients</a></li>
                </ul>
            </div>
            <div className='admin-tab'>
                <h3>Admin</h3>
            </div>
        </nav>
    )
}

export default Navbar