import React,{useRef} from 'react';

//Styles
import './Home.scss';

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
//import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

//Components
import Carousel from '../Components/Carousel';
import PortfolioSlider from '../Components/PortfolioSlider';

//Certificate paths
import ISO9001 from '../Img/Certificates/iso9001.jpg';
import ISO14001 from '../Img/Certificates/iso14001.jpg';
import ISO18001 from '../Img/Certificates/iso18001.jpg';

//SVG icons
import Dots from '../Icons/Dots';
import Square from '../Icons/Square';
import Circle from '../Icons/Circle';
import { NavLink} from 'react-router-dom';
import emailjs from "@emailjs/browser";

function Home(props){

	const form=useRef();
	
		const sendEmail=(e) =>{
		e.preventDefault();
		emailjs.sendForm('service_8qwkvx2','template_6oidzxk',form.current,'QJwti4o51zkJJ9WQg')
		.then((result) =>{
			//console.log(result.text);
			e.target.reset();
			},(error)=>{
				//console.log(error.text);
				e.target.reset();
				});
		};

    return(
        <div className="homeView">
            <Carousel />

            <div className="container">
                <div className="rentalOffer">
                    <p>La meilleure technologie de contruction à des prix avantageux</p>
									{/*<NavLink to="/rental" onClick={()=>props.scrollToTop()}>Services</NavLink>*/}
                </div>

                <div className="aboutUs section">
                    <h2>A propos <Dots /></h2>

                    <div className="container-inner">
                        <h4>IJDGROUPS</h4>
                        <div className="text">
                            <p>Notre entreprise a été fondée en 2020. Depuis sa création, nous avons mis en œuvre des dizaines de projets de construction de divers types. Le but de toutes nos activités est toujours la pleine satisfaction des exigences et des besoins du client.</p>

                            <div className="showMore">
                                <NavLink to="/about" onClick={()=>props.scrollToTop()}>Continuer la lecture <span><FontAwesomeIcon icon={faLongArrowAltRight} /></span></NavLink>
                            </div>
                        </div>
                    </div>

                    <Square />
                </div>

                <div className="certificates section">
                    <h2>Certificats<Dots /></h2>

                    <div className="container-inner">
                        <div className="card-container">
                            <div className="card">
                                <h4>ISO 9001</h4>
                                <p>Certificat de qualité</p>
                                <img src={ISO9001} alt="ISO9001 Certificate" />

                                <div className="box">
                                    <NavLink to="">Voir le Certificat</NavLink>

                                </div>
    
                            </div>

                            <div className="card">
                                <h4>ISO 14001</h4>
                                <p>Certificat d'environement</p>
                                <img src={ISO14001} alt="ISO14001 Certificate" />

                                <div className="box">
                                    <NavLink to="">Voir le Certificat</NavLink>
                                </div>
                            </div>

                            <div className="card">
                                <h4>OHSAS 18001</h4>
                                <p>Certificat de sécurité</p>
                                <img src={ISO18001} alt="ISO18001 Certificate" />
																	<div className="box">
                                    <NavLink to="">Voir le Certificat</NavLink>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio section">
                    <h2>Réalisations<Dots /></h2>

                    <div className="container-inner">
                        <h4>Nos dernières réalisations</h4>

                        <Square />
                        <PortfolioSlider />
                    </div>
                </div>
            </div>

            <div className="allWorks">
                <Circle />

                <div className="container">
                    <h3>Vous voulez voir tous nos travaux?</h3> 
                    <NavLink to="/portfolio" onClick={()=>props.scrollToTop()}>Voir l'ensemble de nos travaux</NavLink>
                </div>        
            </div>

            <div className="contact section">
                <div className="container">
                    <h2>Contact<Dots /></h2>

                    <div className="container-inner">
                        <div className="wrapper">
                            <div className="info">
                                <div className="column">
                                    <div className="heading">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <h4>Turquie</h4>
                                    </div>
                                    <p>Sakarya 5400</p>
                                    <p>Serdivan</p>
																	<div className="heading">
																		<FontAwesomeIcon icon={faMapMarkerAlt} />
																		<h4> Republique Democratique du Congo</h4>
																		</div>
																	<p>Kinshasa</p>
																	<p>Avenue Père Poka numéro 9, commune de la</p>
																	<p>Gombe.</p>
                                </div>
                                    
                                <div className="column">
                                    <div className="heading">
                                        <FontAwesomeIcon icon={faPhoneAlt} /> 
                                        <h4>Contact</h4>
                                    </div>
                                    <p>+905462362068</p>
                                    <p>info@ijdgroups.com</p>
                                </div>
                                
                                <div className="column">
                                    <div className="heading">
                                        <FontAwesomeIcon icon={faClock} />
                                        <h4>Heures de Travail</h4>
                                    </div>
                                    <p>Lundi-Vendredi</p>
                                    <p>8:00 - 18:00</p>
                                </div>
                            </div>

                            <div className="form">
                                <form ref={form} onSubmit={sendEmail}>
                                    <input type="text"
																	placeholder="Name"
																	name="from_name"
																	required />
                                    <input type="email"
																	placeholder="Email"
																	name="from_email"
																	required/>

                                    <textarea
																			placeholder="Message"
																			name="message"
																		></textarea>

                                    <div className="send">
                                        <input type="submit" value="Envoyer"/>
                                    </div> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <Square />
            </div>
        </div>
    )
}

export default Home;
