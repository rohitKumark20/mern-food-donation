import React from 'react'
import { useState } from 'react';
import '../index.css'

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX, faRightToBracket, faUserPlus, faTeeth } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const authenticatedUser = document.cookie
    
    console.log(document.cookie)

    const logout = async () => {
        try {
            const res = await fetch('/logout');
            const response = await res.json();
            if (res.ok) {
                alert(response);
            }
        } catch (error) {
            alert(error.message)
        }
    }

    const handleClick = () => {
        setClick(!click);
    }
    return (
        <>
            <nav className="nav">
                <div className="nav-container">
                    {/* <a href="/"></a> */}
                    <Link to='/'>Food Donation</Link>

                    <ul className='nav-lists'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/food-donation'>Donor</Link>
                        </li>
                        <li>
                            <Link to='/access-food'>Beneficiary</Link>
                        </li>
                        <li>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact Us</Link>
                        </li>
                    </ul>

                    <div className="btns">
                        {
                            authenticatedUser ? <button className='nav-btn' onClick={logout}>Logout</button> :
                                <>
                                    <a href="/login"><button className='nav-btn'>Login</button></a>
                                    <a href="/register"><button className='nav-btn'>SignUp</button></a>
                                </>
                        }
                    </div>

                    <div className="nav-icons" onClick={handleClick}>
                        {click ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
                    </div>
                </div>
            </nav>

            <nav className={click ? "mobile-navigation nav-active" : "mobile-navigation"}>
                <div className="mobile-nav-container">
                    <ul className='mobile-nav-list'>
                        <li>
                            <a href="/">Home</a>
                        </li>

                        <li>
                            <a href="/food-donation">Donor</a>
                        </li>
                        <li>
                            <a href="/access-food">Beneficiary</a>
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/contact">Contact Us</a>
                        </li>
                    </ul>

                    <hr />

                    <div className="mobile-nav-btns">
                        {
                            authenticatedUser ? <a href='/'>
                                <span><FontAwesomeIcon icon={faRightToBracket} /></span>
                                <span>Logout</span>
                            </a> :
                                <>
                                    <a href='/login'>
                                        <span><FontAwesomeIcon icon={faRightToBracket} /></span>
                                        <span>Login</span>
                                    </a>
                                    <a href='/register'>
                                        <span><FontAwesomeIcon icon={faUserPlus} /></span>
                                        <span>SignUp</span>
                                    </a>
                                </>

                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar