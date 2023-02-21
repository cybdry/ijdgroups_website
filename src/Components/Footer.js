import React from 'react';

import { NavLink } from 'react-router-dom';

//Styles
import './Footer.scss';

//Icons
import BackToTop from '../Icons/BackToTop';

function Footer(props){
    return(
        <div className="footer">
            <div className="container">
                <div className="container-inner">
                    <div className="column-wrapper">
                        <div className="column">
                            <h5>Navigation</h5>
                            <NavLink to="/" onClick={props.scrollToTop}>Accueil</NavLink>
                            <NavLink to="/about" onClick={props.scrollToTop}>A propos</NavLink>
                            <NavLink to="/portfolio" onClick={props.scrollToTop}>Realisations</NavLink>
                            <NavLink to="/contact" onClick={props.scrollToTop}>Contact</NavLink>
													{/*<NavLink to="/rental" onClick={props.scrollToTop}>Services</NavLink>*/}
                        </div>

                        <div className="column">
                            <h5>Contact</h5>
                            <a href="tel:+905462362068">+905462362068</a>
                            <a href="mailto:info@ijdgroups.com">info@ijdgroups.com</a>
                        </div>

                       
                        <div className="column">
                            <h5>Adress</h5>
                            <p>Turquie</p>
                            <p>Sakarya 5400</p>
                            <p>Serdivan</p>
                        </div>
                    </div>

                    <div className="copyright">
                        <p>&copy; IJDGROUPS</p>

                        <div className="back-to-top">
                            <BackToTop scrollToTop={props.scrollToTop} />
                            <p onClick={props.scrollToTop}>Debut de page</p> 
                        </div>   
                    </div> 
                </div>
            </div> 
        </div>
    )
}

export default Footer;
