import React from 'react';

// Import de componentes Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Import de componentes de lista e infos adicionais
import List from './List.js';
import ExtraInfoMenu from './extraInfoMenu.js';

const PageLayout = ({image, imageBig, dados, alt, title, extraInfo}) => {
    return (
        <div>
        <h1 className="categoryName">{title}</h1>

            {/* Container para os itens e a imagem */}
            <Container fluid="true">
                
                <Row>
                    <Col xs lg="7" xl="8">
                        {/* Chamamos a imagem para o caso mobile */}
                        <img src={image} alt={alt} className="heroImgMobile" />

                        {/* Componente List gera os dados */}
                        <List dataItem={dados} />

                        {/* Componente de infos adicionais do meny */}
                        <ExtraInfoMenu extraInfo={extraInfo}
                        />

                    </Col>

                    {/* Imagem para segunda coluna */}
                    <Col lg="5" xl="4">
                        <img src={imageBig} alt={alt} className="heroImg" />
                        
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default PageLayout;