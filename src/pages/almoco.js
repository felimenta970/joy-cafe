// Import react
import React from 'react';

// Import icones
import { FaBars } from 'react-icons/fa';

import { Container, Row, Col } from "react-bootstrap";

import almoco from './../assets/mobile/almoco-alt.jpg';
import almocoBig from './../assets/desktop/almoco.jpg';

import List from './../List.js';

// Import dados
import { almocoItens } from "../data/dadosItens.js"; 

const Almoco = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">ALMOÇO</h1>

            <img src={almoco} alt="Foto de prato de comida" className="heroImgMobile" />


            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7">
                    {/* Criamos um div para conter a lista de itens */}
                        <List dataItem={almocoItens} />

                    </Col>

                    <Col lg="5">
                        <img src={almocoBig} alt="Foto de prato de comida" className="heroImg" />
                        
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Almoco;