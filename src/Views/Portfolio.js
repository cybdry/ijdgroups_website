import React from 'react';

//Styles
import './Portfolio.scss';

//SVG icons
import Dots from '../Icons/Dots';
import Square from '../Icons/Square';
import Image_1_1 from '../Img/Slider-Portfolio/1_bas.jpeg';
import Image_1_2 from '../Img/Slider-Portfolio/1_extern.jpeg';
import Image_1_3 from '../Img/Slider-Portfolio/1_post.jpeg';
import Image_1_4 from '../Img/Slider-Portfolio/1_profile.jpeg';
import Image_2_1 from '../Img/Slider-Portfolio/2_extern.jpeg';
import Image_2_2 from '../Img/Slider-Portfolio/2_intern.jpeg';
import Image_2_3 from '../Img/Slider-Portfolio/2_intern_pis.jpeg';
import Image_2_4 from '../Img/Slider-Portfolio/2_main.jpeg';

//Components
import PortfolioItemSlider from '../Components/PortfolioItemSlider';

function Portfolio(){
    return(
        <div className="portfolioView">
            <div className="container">
                <div className="intro section">
                    <h2>Realisations<Dots /></h2>
                    <Square />

                    <div className="container-inner">
                        <div className="text">
                            <p>Nous vous assurons notre accompagnement de proximité ainsi que nos solutions logistiques pour vous faciliter l’importation de matériaux de construction de la Turquie, l'un des plus importants pools d’attraction actuel du commerce international, en raison de la grande progression lui connue ces dernières années, pour l’importation de matériaux de construction et de revêtement de qualité supérieure (ciment, barres d’armature, carreaux, faïences, marbres, céramiques, pièces préfabriquées, etc.) destinés au commerce ou à la réalisation de travaux immobiliers de tout genre. </p>

                            <p>Nous vous assurons notre accompagnement de proximité ainsi que nos solutions logistiques pour vous faciliter l’importation de matériaux de construction de la Turquie, l'un des plus importants pools d’attraction actuel du commerce international, en raison de la grande progression lui connue ces dernières années, pour l’importation de matériaux de construction et de revêtement de qualité supérieure (ciment, barres d’armature, carreaux, faïences, marbres, céramiques, pièces préfabriquées, etc.) destinés au commerce ou à la réalisation de travaux immobiliers de tout genre. </p>
                        </div>
                    </div>
                </div>

                <div className="portfolio section">
                    <div className="container-inner">
                        <div className="portfolio-container">
                            <div className="portfolio-item">
                                <h3>Plan  de Maison<Square /> </h3>

															<p>Nous vous proposons un projet de deux  duplex ultra moderne conçu sur une surface de 500 m² ( avec 250m² de surface de terrain  occupée par chaque villa ).</p>
																COMPOSITION:
															<ul>
																<li>UN GARAGE DE DEUX VEHICULES</li>
																<li>UNE TERRASSE AVANT</li> 
																<li>UNE CUISINE AFRICAINE </li>
																<li>UNE BUANDERIE </li>
																<li>UN GRAND SALON</li> 
																<li>UNE SALLE A MANGER </li>
																<li>UNE DOUCHE VISITEUR </li>
																<li>UNE CHAMBRE AUTONOME </li>
																<li>UNE TERRASSE ARRIERE </li>
																<li>UN JARDIN </li>
																<li>PISCINE AVEC PREAU</li> 
														</ul>
															A L'ETAGE 
															<ul>

																<li>UNE CHAMBRE PRINCIPALE SPACIEUSE AVEC BALCON </li>
																<li>DRESSING ET UNE GRANDE SALLE DE BAIN </li>
																<li>DEUX CHAMBRES AUTONOMES </li>
																</ul>

												RENTREZ CHEZ VOUS DANS LE MINIMALISLME ARTISTIQUE !
															POUR TOUT RENSEIGNEMENT NOUS SOMMES DISPONIBLE
															<p> </p>

                                <PortfolioItemSlider Image1={Image_1_1} Image2={Image_1_2} Image3={Image_1_3} Image4={Image_1_4}/>
                            </div>

                            <div className="portfolio-item">
                                <h3>Plan d'une Villas<Square /> </h3>

															<p>Nous vous proposons un projet de deux  duplex ultra moderne conçu sur une surface de 500 m² ( avec 250m² de surface de terrain  occupée par chaque villa ).</p>
																COMPOSITION:
															<ul>
																<li>UN GARAGE DE DEUX VEHICULES</li>
																<li>UNE TERRASSE AVANT</li> 
																<li>UNE CUISINE AFRICAINE </li>
																<li>UNE BUANDERIE </li>
																<li>UN GRAND SALON</li> 
																<li>UNE SALLE A MANGER </li>
																<li>UNE DOUCHE VISITEUR </li>
																<li>UNE CHAMBRE AUTONOME </li>
																<li>UNE TERRASSE ARRIERE </li>
																<li>UN JARDIN </li>
																<li>PISCINE AVEC PREAU</li> 
														</ul>
															A L'ETAGE 
															<ul>

																<li>UNE CHAMBRE PRINCIPALE SPACIEUSE AVEC BALCON </li>
																<li>DRESSING ET UNE GRANDE SALLE DE BAIN </li>
																<li>DEUX CHAMBRES AUTONOMES </li>
																</ul>

												RENTREZ CHEZ VOUS DANS LE MINIMALISLME ARTISTIQUE !
															POUR TOUT RENSEIGNEMENT NOUS SOMMES DISPONIBLE
															<p> </p>

                                <PortfolioItemSlider Image1={Image_2_1} Image2={Image_2_2} Image3={Image_2_3} Image4={Image_2_4}/>
                            </div>

													{/*<div className="portfolio-item">
                                <h3>Most v Narnii <Square /></h3>

                                <p>Powder halvah macaron tiramisu poweder drageé donut. Sugar plum gummies dessert pudding carrot cake dessert oat cake fuitcake gummi bears. Brownie cotton candy jelly beans chocolate cake. Powder halvah macaron tiramisu poweder drageé donut.</p>

                                <PortfolioItemSlider />
														</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
