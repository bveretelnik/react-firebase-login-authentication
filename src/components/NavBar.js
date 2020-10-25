import React from 'react'
import { NavLink } from 'react-router-dom'
import fire from '../base'

export default function NavBar() {
    const handleLogout = () => {
        fire.auth().signOut()
      }
    return (
        <section className='navbar'>
            <nav>
                <h2>LOGIN FORM</h2>
                <div className="navigation-link">
                <button className='link'><NavLink className="nav-link" to='/'>Home</NavLink></button>
                <button className='link'><NavLink className="nav-link" to='/services'>Services</NavLink></button>
                <button className='link'  onClick={handleLogout}><NavLink className="nav-link" to='/login'> Login</NavLink></button>
                </div>
            </nav>
        </section>
    )
}
