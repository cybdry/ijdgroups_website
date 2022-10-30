import React from 'react';

//Styles
import './About.scss';

//Icons
import Building from '../Icons/about/Building';
import Excavator from '../Icons/about/Excavator';
import Wrench from '../Icons/about/Wrench';
import Painter from '../Icons/about/Painter';
import Spray from '../Icons/about/Spray';
import Shield from '../Icons/about/Shield';
import Standard1 from '../Icons/about/Standard1';
import Standard2 from '../Icons/about/Standard2';
import Standard3 from '../Icons/about/Standard3';
import Standard4 from '../Icons/about/Standard4';

//SVG icons
import Dots from '../Icons/Dots';
import Square from '../Icons/Square';
import Circle from '../Icons/Circle';
import Triangle from '../Icons/Triangle';

function About(){
    return(
        <div className="aboutView">
            <div className="container">
                <div className="aboutUs section">
                    <h2>A propos de nous<Dots /></h2>

                    <div className="container-inner">
                        <h4>IJDGROUPS</h4>
                        
                        <div className="text">
													<p>IDJ construction & consultating Group est Créer par L'Ingénieur <b><i>Joseph Doucke Omende Kahudi</i></b>.</p>
														<p>IDJ-GROUP is International Construction Project Management and Consulting Corporation, nous sommes un groupe de professionnels composé d'ingénieurs et d'architectes experts qui ont été impliqués dans des projets de construction internationaux pendant de nombreuses années ayant une vaste expérience, des connaissances et des compétences techniques et se réunissent pour fournir le meilleur service à nos clients.</p>
														<p>Dans les projets de construction internationaux, nous fournissons des services de conseil en gestion des contrats (FIDIC Suite of Contracts et autres), gestion des réclamations et variations, témoin expert et résolution des litiges.</p>
                        </div>
                    </div>
  
                    <Triangle />
                    <Square />
                </div>

                <div className="whatWeDo section">
                    <h2>Nos Domaines<Dots /></h2>

                    <div className="container-inner">
                        <div className="card-container">
                            <div className="card">
                                <Building />
															<p><b>Construction des maisons préfabriquées</b></p>											
															<p>Pour vous permettre de profiter des innovations technologiques, nous vous facilitons l’obtention de crédit nécessaire, des spécifications techniques d’usage et des solutions logistiques en vue de la réalisation de projets immobiliers en temps record grâce à la solution de maisons préfabriquées à un coût très concurrentiel !	</p>
                            </div>

                            <div className="card">
                                <Excavator />
															<p><b>Installation de l’éclairage public</b></p>
																<p>Notre expertise accompagne les administrations publiques ainsi que les promoteurs privés dans la conception et l’implémentation de projets d’aménagement des espaces publics ou privés pour permettre l'accroissement de la circulation et décorer les espaces les plus prestigieux (avenues centrales, gares, parcs et espaces d'expositions…) et sécuriser les espaces urbains, spécialement par l'éclairage public à l'intérieur et à l'extérieur des villes, très généralement en bordures des voiries et places, nécessaires à l’aisance et au confort des êtres humains.</p>
                            </div>

                            <div className="card">
                                <Wrench />
															<p><b>Suivi et contrôle des projets génie civil et hydraulique</b></p>
															<p>Lors de l’exécution de travaux confiés aux tiers, notre bureau d’études se propose d’assurer le contrôle et surveillance des travaux en assurant le suivi du planning d’exécution fourni par les entreprises et en participant à la mise au point du planning à remanier éventuellement.</p>
																	<p>Par ce contrôle des travaux, nous prenons soin de nous assurer que les travaux sont réalisés dans le respect des règles de l’Art et conformément aux plans et spécifications techniques des termes de références ayant régi l’accord entre les parties. </p>
                            </div>

                            <div className="card">
                                <Painter />
															<p><b>Elaboration de plan stratégique de transport</b></p>
																<p>Nous assurons l’élaboration des études et mise en œuvre de projets d’optimisation du réseau de transport interurbain en vue de répondre aux besoins de transport toujours croissant à l’intérieur et/ou hors agglomérations à travers les lignes régulières et occasionnelles.</p>
                            </div>

                            <div className="card">
                                <Spray />
															<p><b>Facilitation d’importation de matériaux de construction et autres entre la Turquie et l’Afrique</b></p>
															
																<p>Nous vous assurons notre accompagnement de proximité ainsi que nos solutions logistiques pour vous faciliter l’importation de matériaux de construction de la Turquie, l'un des plus importants pools d’attraction actuel du commerce international, en raison de la grande progression lui connue ces dernières années, pour l’importation de matériaux de construction et de revêtement de qualité supérieure (ciment, barres d’armature, carreaux, faïences, marbres, céramiques, pièces préfabriquées, etc.) destinés au commerce ou à la réalisation de travaux immobiliers de tout genre. </p>
                            </div>

													{<div className="card">
                                <Shield />
														<p><b>Construction des villas d’habitation et des commerces</b></p>
																<p>Nous vous assurons un accompagnement complet et personnalisé lors de la réalisation de projets immobiliers qui vous tiennent à cœur. De l’obtention du financement nécessaire à la réalisation de travaux de construction en passant par l’acquisition de la parcelle, nos ingénieurs, techniciens et notaires sont à vos côtés pour répondre à vos besoins les plus exigeants.</p>
														</div>}
                        </div>
                    </div>

                    <Square />
                    <Circle />
                </div>

                <div className="ourStandards section">
									<h2>Nos Standards <Dots/></h2>
                    
                    <div className="container-inner">
                        <div className="text">
                            <p></p>
                        </div>

                        <div className="standard-container">
                            <div className="standard">
                                <Standard1 />
                                <div className="standard-text">
                                    <h4>Les Grands services</h4>
                                    <p>Vous pouvez compter sur la qualité de notre travail et sur le respect des délais et des prix convenus.</p>
                                </div>
                            </div>

                            <div className="standard">
                                <Standard2 />
                                <div className="standard-text">
                                    <h4>Haute qualité</h4>
                                    <p>Lors de la prestation de nos services, nous essayons toujours de procéder conformément aux exigences des normes ISO et STN</p>
                                </div>
                            </div>

                            <div className="standard">
                                <Standard3 />
                                <div className="standard-text">
                                    <h4>Une équipe de professionnels</h4>
                                    <p>Nos clients peuvent toujours compter sur la grande expertise et le professionnalisme de nos employés.</p>
                                </div>
                            </div>

                            <div className="standard">
                                <Standard4 />
                                <div className="standard-text">
                                    <h4>Des solutions créatives</h4>
                                    <p>Depuis notre création, nous avons mis en œuvre des dizaines de projets de construction de nature variée.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
