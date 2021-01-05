// Import react
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

// Import icones
import { FaBars } from 'react-icons/fa';

import almoco from './../assets/mobile/almoco-alt.jpg';
import almocoBig from './../assets/desktop/almoco.jpg';

import List from '../components/List.js';

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

            {/* Container para os itens e a imagem */}
            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7">
                        {/* Chamamos a imagem para o caso mobile */}
                        <img src={almoco} alt="Foto de prato de comida" className="heroImgMobile" />

                        {/* Componente List gera os dados */}
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