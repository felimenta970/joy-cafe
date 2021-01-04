// Import react
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

// Import icones
import { FaBars } from 'react-icons/fa';

import cafe from './../../assets/mobile/cafe.jpg';
import cafeBig from './../../assets/desktop/cafe.jpg';

import List from './../../List.js';

// Import dados
import { cafeItens } from "./../../data/dadosItens.js"; 

const Cafe = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">CAFÉS</h1>

            <img src={cafe} alt="Xícara de café" className="heroImgMobile" />


            {/* Criamos um div para conter a lista de itens */}
            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7">
                    {/* Criamos um div para conter a lista de itens */}
                        <List dataItem={cafeItens} />

                    </Col>

                    <Col lg="5">
                        <img src={cafeBig} alt="Xícara de café" className="heroImg" />
                        
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Cafe;