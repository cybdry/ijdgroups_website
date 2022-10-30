import React from 'react';

//React-router-dom
import {NavLink} from 'react-router-dom';

//Styles
import './Navigation.scss';
import logo from "../Img/logo.png"
//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation(props){
    return(
        <nav>
            <div className="container">
                <div className="nav-items">
                    <div className="logo">
											<NavLink to="/" exact="true" activeClassName="active">
												<img src={logo} alt="IJDGROUPS"/>
											</NavLink>
                    </div>

                    <div className="menu">
                        <ul>
                            <li><NavLink to="/" exact="true" activeClassName="active"></NavLink></li>
                            <li><NavLink to="/about" exact="true" activeClassName="active">A propros</NavLink></li>
                            <li><NavLink to="/portfolio" exact="true" activeClassName="active">Réalisation</NavLink></li>
                            <li><NavLink to="/contact" exact="true" activeClassName="active">Contact</NavLink></li>
                        </ul>
                    </div>

                    <div className="language">
                        <FontAwesomeIcon className="globe" icon={faGlobe} />
                        <p>Français</p>
                        <FontAwesomeIcon className="angleDown" icon={faAngleDown} />
                    </div>

									{/*<div className="rental">
										  <NavLink to="/rental" activeClassName="activeRental">Services</NavLink>
										</div>
										*/} 
                    <div className="mobile-menu-icon" onClick={()=>props.openMobileMenu()}>
                        <FontAwesomeIcon icon={faBars} />
										</div>
                </div>
            </div>

        </nav>
    )
}

export default Navigation;
