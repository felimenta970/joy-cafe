// Import react
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

import List from './../List.js';

// Import icones
import { FaBars } from 'react-icons/fa';

import salada from './../assets/mobile/salada.jpg';

// Import dados
import { saladaItens } from "../data/dadosItens.js"; 

const Salada = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">SALADAS</h1>

            <img src={salada} alt="Salada no prato" className="heroImgMobile" />


            {/* Criamos um div para conter a lista de itens */}
            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7">
                    {/* Criamos um div para conter a lista de itens */}
                        <List dataItem={saladaItens} />

                    </Col>

                    <Col lg="5">
                        {/* <img src={almocoBig} alt="Foto de prato de comida" className="heroImg" /> */}
                        
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Salada;