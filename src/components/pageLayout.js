import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

import List from '../components/List.js';

const PageLayout = ({image, imageBig, dados, alt, title}) => {
    return (
        <div>
        <h1 className="categoryName">{title}</h1>

            {/* Container para os itens e a imagem */}
            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7">
                        {/* Chamamos a imagem para o caso mobile */}
                        <img src={image} alt={dados.altImage} className="heroImgMobile" />

                        {/* Componente List gera os dados */}
                        <List dataItem={dados} />

                    </Col>

                    <Col lg="5">
                        <img src={imageBig} alt={dados.altImage} className="heroImg" />
                        
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default PageLayout;