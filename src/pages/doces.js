// Import react
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

import List from './../List.js';

// Import icones
import { FaBars } from 'react-icons/fa';

import doce from './../assets/mobile/bolo_cenoura.jpg';

// Import dados
import { docesItens } from "../data/dadosItens.js"; 

const Doces = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">DOCES</h1>

            <img src={doce} alt="Bolo de laranja" className="heroImgMobile" />


            {/* Criamos um div para conter a lista de itens */}
            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7">
                    {/* Criamos um div para conter a lista de itens */}
                        <List dataItem={docesItens} />

                    </Col>

                    <Col lg="5">
                        {/* <img src={almocoBig} alt="Foto de prato de comida" className="heroImg" /> */}
                        
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Doces;