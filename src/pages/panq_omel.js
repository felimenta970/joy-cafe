// Import react
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

import List from './../components/List.js';

// Import icones
import { FaBars } from 'react-icons/fa';

import omelete from './../assets/mobile/omelete.jpg';
import omeleteBig from './../assets/desktop/omelete.jpg';

// Import dados
import { panquecaOmeleteItens } from "../data/dadosItens.js"; 

const Omelete = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">PANQUECAS E OMELETES</h1>

            <img src={omelete} alt="Omelete no prato" className="heroImgMobile" />


            {/* Criamos um div para conter a lista de itens */}
            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7">
                    {/* Criamos um div para conter a lista de itens */}
                        <List dataItem={panquecaOmeleteItens} />

                    </Col>

                    <Col lg="5">
                        <img src={omeleteBig} alt="Omelete no prato" className="heroImg" />
                        
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Omelete;