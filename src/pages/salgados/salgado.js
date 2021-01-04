// Import react
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

import List from './../../List.js';

// Import icones
import { FaBars } from 'react-icons/fa';

import salgado from './../../assets/mobile/salgado.jpg';

// Import dados
import { salgadosItens } from "./../../data/dadosItens.js"; 

const Salgado = ({handleToggleSidebar}) => {
    return (
        <div className="main">
            
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>


            <h1 className="categoryName">SALGADOS</h1>

            <img src={salgado} alt="Croassaint sendo polvilhado" className="heroImgMobile" />


            {/* Criamos um div para conter a lista de itens */}
            <Container fluid="true">

                <Row>
                    <Col xs lg="7">
                    {/* Criamos um div para conter a lista de itens */}
                        <List dataItem={salgadosItens} />

                    </Col>

                    <Col lg="5">
                        {/* <img src={almocoBig} alt="Foto de prato de comida" className="heroImg" /> */ }
                        
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default Salgado;