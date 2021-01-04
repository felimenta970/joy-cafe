// Import react
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

// Import icones
import { FaBars } from 'react-icons/fa';

import capuccino from './../../assets/mobile/cappuccino.jpg';
import capuccinoBig from './../../assets/desktop/cappuccino.jpg';

import List from './../../List.js';

// Import dados
import { capuccinoItens } from "./../../data/dadosItens.js"; 

const Capuccino = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">CAPUCCINOS</h1>

            <img src={capuccino} alt="Capuccino sendo servido em uma xícara" className="heroImgMobile" />


            {/* Criamos um div para conter a lista de itens */}
            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7">
                    {/* Criamos um div para conter a lista de itens */}
                        <List dataItem={capuccinoItens} />

                    </Col>

                    <Col lg="5">
                        <img src={capuccinoBig} alt="Capuccino sendo servido em uma xícara" className="heroImg" />
                        
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Capuccino;