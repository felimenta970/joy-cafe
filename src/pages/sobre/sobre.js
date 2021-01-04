// Imports React, rotas
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import icons
import { FaBars } from 'react-icons/fa';

import { Container, Row, Col } from "react-bootstrap";

import almoco from './../../assets/mobile/almoco-alt.jpg';
import almocoBig from './../../assets/desktop/almoco.jpg';

// import { dadosSobreNos } from "../../data/dadosSobreNos.js";

const Sobre = ({handleToggleSidebar}) => {
    return (
        <Router>
            <div className="main">

                
                {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
                <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                    
                </div>
                
                <div>
                    <h1 className="categoryName">SOBRE NÓS</h1>
                    
                    <Container fluid="true">
                
                        <Row>
                            <Col xs lg="7">
                            {/* Criamos um div para conter a lista de itens */}
                                <img src={almoco} alt="Foto de prato de comida" className="heroImgMobile" />
                                <div>
                                    O Joy café foi fundado em xxxxxxxxxx
                                </div>

                                <div>
                                    O Joy café foi fundado em xxxxxxxxxx
                                </div>

                            </Col>

                            <Col lg="5">
                                <img src={almoco} alt="Foto de prato de comida" className="heroImg" />
                                
                            </Col>
                        </Row>

                        <br/>

                        <h1 className="categoryName">OS CABEÇAS</h1>

                        <Row>
                            <Col xs lg="7">
                            {/* Criamos um div para conter a lista de itens */}
                                <img src={almoco} alt="Foto de prato de comida" className="heroImgMobile" />
                                <div>
                                    O Joy café foi fundado em xxxxxxxxxx
                                </div>

                                <div>
                                    O Joy café foi fundado em xxxxxxxxxx
                                </div>

                            </Col>

                            <Col lg="5">
                                <img src={almoco} alt="Foto de prato de comida" className="heroImg" />
                                
                            </Col>
                        </Row>

            </Container>

                </div>
                
            </div>
        </Router>
    );
}

export default Sobre;