import React from 'react';

//React-router-dom
import {NavLink} from 'react-router-dom';

//Styles
import './MobileNavigation.scss';

function MobileNavigation(props){
    return(
        <div className="mobileMenu">
            <div className="container">
                <h4>IJDGROUPS</h4>

                <ul>
                    <li><NavLink to="/" exact="true" activeClassName="active" onClick={() => props.closeMobileMenu()}>Accueil</NavLink></li>
                    <li><NavLink to="/about" exact="true" activeClassName="active" onClick={() => props.closeMobileMenu()}>A propos</NavLink></li>
                    <li><NavLink to="/portfolio" exact="true" activeClassName="active" onClick={() => props.closeMobileMenu()}>Realisation</NavLink></li>
                    <li><NavLink to="/contact" exact="true" activeClassName="active" onClick={() => props.closeMobileMenu()}>Contact</NavLink></li>
									{/*<li><NavLink to="/rental" exact activeClassName="active" onClick={() => props.closeMobileMenu()}>Localisation</NavLink></li>*/}
                </ul>
            </div>

        </div>
    )
}

export default MobileNavigation;
