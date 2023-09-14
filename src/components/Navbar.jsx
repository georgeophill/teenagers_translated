import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import PeopleLeft from '../assets/images/people-left.png'
import PeopleRight from '../assets/images/people-right.png'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__top">
                <div className="navbar__left">
                    <Link to="/" className="navbar__logo">
                        <img src={PeopleLeft} alt="logo" />
                    </Link>
                </div>
                <div className='navbar__center'>
                    <div className='navbar__item'>
                        <Link to="/" className="navbar__link">Teenagers Translated</Link>
                    </div>
                    <div className="navbar__subtitle">
                        A Parents Survival Guide
                    </div>
                </div>
                <div className="navbar__right">
                    <Link to="/" className="navbar__logo">
                        <img src={PeopleRight} alt="logo" />
                    </Link>
                </div>
                </div>
                    <div className="navbar__bottom">
                        <Link to="/" className="navbar__link">Home</Link>
                        <Link to="/about" className="navbar__link">About</Link>
                        <Link to="/contact" className="navbar__link">Contact</Link>
                        <Link to="/ourBook" className="navbar__link">Our Book</Link>
                        <Link to="/parentWork" className="navbar__link">Parent Work</Link>
                        <Link to="/resources" className="navbar__link">Resources</Link>
                        <Link to="/schoolWork" className="navbar__link">School Work</Link>
                    </div>
                 </div>
        )
}

export default Navbar