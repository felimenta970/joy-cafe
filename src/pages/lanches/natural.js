// Import react
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

import List from './../../List.js';

// Import icones
import { FaBars } from 'react-icons/fa';

import sand_natural from './../../assets/mobile/sand_natural.jpg';

// Import dados
import { lancheNaturalItens } from "./../../data/dadosItens.js"; 

const Natural = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">LANCHES NATURAIS</h1>

            <img src={sand_natural} alt="Dois lanches naturais com tomate, cebola e queijo" className="heroImgMobile" />


            {/* Criamos um div para conter a lista de itens */}
            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7">
                    {/* Criamos um div para conter a lista de itens */}
                        <List dataItem={lancheNaturalItens} />

                    </Col>

                    <Col lg="5">
                        {/* <img src={almocoBig} alt="Foto de prato de comida" className="heroImg" /> */}
                        
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Natural;