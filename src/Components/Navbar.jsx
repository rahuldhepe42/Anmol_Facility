import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Logo from '../Assets/logo2.jpeg';
 
function Navbar() { 
    return (
        <div className='navcontent'>

            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container" id="Navbar">
                    
                    <img src={Logo} alt="" />
                    <Link className="navbar-brand text-white ps-3" to="#">AFMS</Link>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarScroll">
                        <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item ">
                                <Link className="nav-link text-white " to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/About">About Us</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Services" >Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Jobs" >Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/FAQ" >FAQ'S</Link>
                            </li>
                        </ul>
                        
                    </div> 
                </div>
            </nav>

            <Outlet />


        </div>
    )
}

export default Navbar