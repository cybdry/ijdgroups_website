import React from 'react';

//Styles
import './Contact.scss';

//React-router-dom
import { useNavigate } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import {useRef} from 'react';
//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
//import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


//SVG icons
import Dots from '../Icons/Dots';
import Square from '../Icons/Square';

function Contact(){
	const navigate=useNavigate();
	const form=useRef();
		const sendEmail=(e) =>{
		e.preventDefault();
		emailjs.sendForm('service_8qwkvx2','template_6oidzxk',form.current,'QJwti4o51zkJJ9WQg')
		.then((result) =>{
			//console.log(result.text);
			e.target.reset();
			navigate("/");
			},(error)=>{
				//console.log(error.text);
				e.target.reset();
				});
		};

    return(
        <div className="contactView">
            <div className="container">
                <div className="contactForm section">
                    <h2>Contact<Dots /></h2>
                    <Square />

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
                                        <h4>Hours de Travail</h4>
                                    </div>
                                    <p>Lundi-Vendredi</p>
                                    <p>8:00 - 18:00</p>
                                </div>
                            </div>

                            <div className="form">
                                <form ref={form} onSubmit={sendEmail}>
                                    <input type="text" placeholder="Name" name="from_name" required/>
                                    <input type="email" placeholder="Email" name="from_email" required/>

                                    <textarea placeholder="Message" name="message" required ></textarea>

                                    <div className="send">
																			<input type="submit" value="Envoyer" />
                                    </div> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rental section">
                    <div className="container-inner">
                        <h2>Service Techniques</h2>

                        <h1>+905462362068</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
