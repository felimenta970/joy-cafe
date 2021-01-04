// Import react
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

// Import icones
import { FaBars } from 'react-icons/fa';

import leite from './../../assets/mobile/leites.jpg';
import leiteBig from './../../assets/desktop/leites.jpg';

import List from './../../List.js';

// Import dados
import { leiteItens } from "./../../data/dadosItens.js"; 

const Leite = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">LEITE</h1>

            <img src={leite} alt="Chocolate quente em uma xícara" className="heroImgMobile" />


            {/* Criamos um div para conter a lista de itens */}
            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7">
                    {/* Criamos um div para conter a lista de itens */}
                        <List dataItem={leiteItens} />

                    </Col>

                    <Col lg="5">
                        <img src={leiteBig} alt="Foto de prato de comida" className="heroImg" />
                        
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Leite;