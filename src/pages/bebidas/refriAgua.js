// Import react
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

import List from './../../List.js';

// Import icones
import { FaBars } from 'react-icons/fa';


import refri from './../../assets/mobile/refri.jpg';
import refriBig from './../../assets/desktop/refri.jpg';

// Import dados
import { refriItens } from "./../../data/dadosItens.js"; 

const Refri = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">REFRIGERANTES E ÁGUA</h1>

            <img src={refri} alt="Lata de coca cola no fundo preto" className="heroImgMobile" />

            

            {/* Criamos um div para conter a lista de itens */}
            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7">
                    {/* Criamos um div para conter a lista de itens */}
                        <List dataItem={refriItens} />

                    </Col>

                    <Col lg="5">
                        <img src={refriBig} alt="Foto de prato de comida" className="heroImg" />
                        
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Refri;