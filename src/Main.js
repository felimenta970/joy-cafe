// Imports React, rotas
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import icons
import { FaBars } from 'react-icons/fa';

import { Container, Row, Col } from "react-bootstrap";

import Map from './components/Maps.js';

import almoco from './assets/mobile/almoco-alt.jpg';

import fb_icon from './assets/facebook_icon.png';
import wa_icon from './assets/whatsapp_icon.png';
import ig_icon from './assets/instagram_icon.png';
import email_icon from './assets/email_icon.png';

const location = {
    address: 'R. Joaquim Antônio Nascimento, 156',
    lat: -21.210775051346815,
    lng: -47.81274930995369,
}


const Main = ({handleToggleSidebar}) => {
    return (
        <Router>
            <div className="main">

                
                {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
                <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                    
                </div>

                <h1 className="categoryName">HOME</h1>

                {/* Corpo da página, a ser construído */}
                <Container fluid="true">
                
                    <Row>
                        <Col xs lg="7">
                        {/* Criamos um div para conter a lista de itens */}
                            <img src={almoco} alt="Foto de prato de comida" className="heroImgMobile" />
                            <div className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec turpis in sapien fermentum pharetra ut faucibus nibh. Integer tempus pretium tincidunt. Nullam ante dui, pulvinar non tortor quis, imperdiet pulvinar ligula. Integer gravida interdum cursus. Suspendisse sollicitudin facilisis sodales. Aenean egestas eros sed dolor gravida consectetur. Sed blandit massa commodo pulvinar molestie. Phasellus id sem nibh. Vestibulum aliquet vitae urna at rhoncus. Nunc non euismod dolor, eu efficitur risus. Curabitur aliquet velit ac dui placerat, ac ultrices lectus malesuada. Vivamus vitae sagittis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </div>

                        </Col>

                        <Col lg="5">
                            <img src={almoco} alt="Foto de prato de comida" className="heroImg" />
                            
                        </Col>
                    </Row>

                    <br/>
                    <br/>

                    <Row>
                        <Col xs lg="7">
                        {/* Criamos um div para conter a lista de itens */}
                            <h1 className="categoryName">HORÁRIOS DE FUNCIONAMENTO</h1>
                            <img src={almoco} alt="Foto de prato de comida" className="heroImgMobile" />

                            <h2 className="horarioTitle">Estabelecimento</h2>

                            <div className="paragraph">
                                SEGUNDA À SEXTA: 8:00 às 18:00
                            </div>

                            <h2 className="horarioTitle">Refeições</h2>

                            <div className="paragraph">
                                SEGUNDA À SEXTA: 11:30 às 14:00 (sujeito à disponibilidade)
                            </div>

                        </Col>

                        <Col lg="5">
                            <img src={almoco} alt="Foto de prato de comida" className="heroImg" />
                            
                        </Col>
                    </Row>

                    <br/>

                    <Row>
                        <Col xs lg="7">
                        {/* Criamos um div para conter a lista de itens */}
                            <h1 className="categoryName contact">CONTATO</h1>
                            {/* <img src={almoco} alt="Foto de prato de comida" className="heroImgMobile" /> */}

                            <div className="paragraph secondary">Quer fazer um pedido? Orçar um evento? Entre em contato conosco!</div>

                            <br/>

                            <a href="" target="_blank" className="contactGroup">

                                <img src={wa_icon} className="contactIcon"/>
                                
                                <div className="paragraph contactText">
                                    WhatsApp
                                </div>

                            </a>

                            <br/>
                            <br/>

                            <a href="https://www.instagram.com/joycaferp/" target="_blank" rel="noreferrer" className="contactGroup">

                                <img src={ig_icon} className="contactIcon"/>
                                
                                <div className="paragraph contactText">
                                    Instagram
                                </div>

                            </a>

                            <br/>
                            <br/>

                            <a href="https://www.facebook.com/joycaferp" target="_blank" rel="noreferrer" className="contactGroup">

                                <img src={fb_icon} className="contactIcon"/>
                                
                                <div className="paragraph contactText">
                                    Facebook
                                </div>

                            </a>

                            <br/>
                            <br/>

                            <a href="mailto:joycaferp@gmail.com" target="_blank" rel="noreferrer" className="contactGroup">

                                <img src={email_icon} className="contactIcon"/>
                                
                                <div className="paragraph contactText">
                                    Email
                                </div>

                            </a>

                            


                        </Col>

                        <Col lg="5">
                            {/* <img src={almoco} alt="Foto de prato de comida" className="heroImg" /> */}
                            
                        </Col>
                    </Row>

                    <br/>

                    <Row>
                        <Col className="location">
                        {/* Criamos um div para conter a lista de itens */}
                            <h1 className="categoryName">LOCALIZAÇÃO</h1>

                            <div className="paragraph">
                                <a href="https://goo.gl/maps/JBM4bE61xPqTNfyt6" target="_blank" rel="noreferrer">Rua Joaquim Antônio Nascimento, 156 - Jardim Canadá, Ribeirão Preto - SP</a>
                            </div>


                        </Col>

                    </Row>

                    <br/>

                    <Row>

                        <Col>
                            <div className="footerMain">

                                {/* Componente mapa, que contém o mapa da localização do estabelecimento */}
                                <Map location = {location} zoomLevel = {18} />
                            </div>
                        </Col>

                    </Row>

                </Container>



                {/* Footer da página principal */}

                
            </div>
        </Router>
    );
}

export default Main;