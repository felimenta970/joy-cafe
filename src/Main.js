// Imports React, rotas
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import icons
import { FaBars } from 'react-icons/fa';

import { Container, Row, Col } from "react-bootstrap";

import Map from './components/Maps.js';
import ContactInfo from './components/contactInfo.js';

import almoco from './assets/mobile/almoco-alt.jpg';
import clock from './assets/joy/clock.jpg';

const location = {
    address: 'R. Joaquim Antônio Nascimento, 156',
    lat: -21.210775051346815,
    lng: -47.81274930995369,
}

const mainText1 = "Sejam bem vindos ao Joy Café & Bistrot! Conheçam nosso cardápio cheio de opções deliciosas para o seu café da manhã, um almoço rápido, caseiro e saudável, e o lanche leve da tarde!";
const mainText2 = "Ah, e caso esteja em busca de alguém para preparar a comida do seu evento, entre em contato conosco para realizar um orçamento! Você pode conhecer um pouco dos serviços que realizamos em Sobre Nós -> Serviços, no menu do site.";


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
                                {mainText1}
                            </div>
                            <div className="paragraph">
                                {mainText2}
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
                            <img src={clock} alt="Foto de prato de comida" className="heroImgMobile" />

                            <h2 className="horarioTitle">Estabelecimento</h2>

                            <div className="paragraph hours">
                                SEGUNDA À SEXTA: 8:00 às 17:00
                            </div>

                            <h2 className="horarioTitle">Refeições</h2>

                            <div className="paragraph">
                                SEGUNDA À SEXTA: 11:30 às 14:00 (sujeito à disponibilidade)
                            </div>

                        </Col>

                        <Col lg="5">
                            <img src={clock} alt="Foto de prato de comida" className="heroImg" />
                            
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

                            <ContactInfo />

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

                
            </div>
        </Router>
    );
}

export default Main;