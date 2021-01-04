// Import react
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

// Import icones
import { FaBars } from 'react-icons/fa';

import cha from './../../assets/mobile/cha.jpg';
import chaBig from './../../assets/desktop/cha.jpg';

import List from './../../List.js';

// Import dados
import { chaItens } from "./../../data/dadosItens.js"; 

const Cha = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">CHÁS</h1>

            <img src={cha} alt="Xícara de chá em mesa de madeira" className="heroImgMobile" />


            {/* Criamos um div para conter a lista de itens */}
            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7">
                    {/* Criamos um div para conter a lista de itens */}
                        <List dataItem={chaItens} />

                    </Col>

                    <Col lg="5">
                        <img src={chaBig} alt="Foto de prato de comida" className="heroImg" />
                        
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Cha;