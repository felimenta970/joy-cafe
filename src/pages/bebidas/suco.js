// Import react
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

import List from './../../List.js';

// Import icones
import { FaBars } from 'react-icons/fa';

import suco from './../../assets/mobile/suco.jpg';
import sucoBig from './../../assets/desktop/suco.jpg';

// Import dados
import { sucoItens } from "./../../data/dadosItens.js"; 

const Suco = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">SUCOS</h1>

            <img src={suco} alt="Suco de laranja no copo e laranjas ao fundo" className="heroImgMobile" />


            {/* Criamos um div para conter a lista de itens */}
            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7">
                    {/* Criamos um div para conter a lista de itens */}
                        <List dataItem={sucoItens} />

                    </Col>

                    <Col lg="5">
                        <img src={sucoBig} alt="Suco de laranja no copo e laranjas ao fundo" className="heroImg" />
                        
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Suco;