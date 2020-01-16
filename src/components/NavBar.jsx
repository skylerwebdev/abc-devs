import React, {useState} from 'react'
import { NavLink as NL } from 'react-router-dom'
import '../styles/Nav.css'

const showNav = () => {
    const navLinks = document.querySelectorAll('.nL')
    console.log('clicked', navLinks)
    // navLinks.classList.remove('hidden')
}



const NavBar = () => {
    return (
        <div className="mN">
            <div className="nLt">
            <span className="nL hide" onClick={showNav}  >Open Nav Container</span>
            </div>
            <div className="nCt">
            <NL className="nL hidden" exact to='/'>Home</NL>
            <NL className="nL hidden" to='#'>About</NL>
            <NL className="nL hidden" to='#'>Developers</NL>
            <NL className="nL hidden" to='#'>Consumers</NL>
            </div>
            <div className="nRt">
            <NL className="nL hidden" to='#'>Login</NL>
            <NL className="nL hidden" to='#'>Register</NL>
            </div>
        </div>
    )
}

export default NavBar
