import React, {useState} from 'react'
import { NavLink as NL } from 'react-router-dom'
import '../styles/Nav.css'






const NavBar = () => {
    const [open, setOpen] = useState(false)

    const shownav = () => {
    if(open === true){
        setOpen(false)
        console.log("clicked")
    } if(open === false)
    {
        setOpen(true)
    }
    }


    return (
        <div className="mN">
            <div className="nLt">
            <span className="open hide"  onClick={shownav}>Open Nav Container</span>
            </div>
            <div className={open ? "nCt" : "nCt hidden"}>
            <NL className="nL" exact to='/'>Home</NL>
            <NL className="nL" to='#'>About</NL>
            <NL className="nL" to='#'>Developers</NL>
            <NL className="nL" to='#'>Consumers</NL>
            </div>
            <div className={open ? "nRt" : "nRt hidden"}>
            <NL className="nL" to='#'>Login</NL>
            <NL className="nL" to='#'>Register</NL>
            </div>
        </div>
    )
}

export default NavBar
