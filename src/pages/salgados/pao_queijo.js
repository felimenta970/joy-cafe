// Import react
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

import List from './../../List.js';

// Import icones
import { FaBars } from 'react-icons/fa';

import pao_queijo from './../../assets/mobile/pao_queijo.jpg';
import pao_queijoBig from './../../assets/desktop/pao_queijo.jpg';

// Import dados
import { paoQueijoItens } from "./../../data/dadosItens.js"; 

const PaoQueijo = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">PÃES DE QUEIJO</h1>

            <img src={pao_queijo} alt="Pães de queijo em travessa" className="heroImgMobile" />


            {/* Criamos um div para conter a lista de itens */}
            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7">
                    {/* Criamos um div para conter a lista de itens */}
                        <List dataItem={paoQueijoItens} />

                    </Col>

                    <Col lg="5">
                        <img src={pao_queijoBig} alt="Foto de prato de comida" className="heroImg" />
                        
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default PaoQueijo;