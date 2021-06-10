import React from 'react';

// Import de componentes Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Import de componentes de lista e infos adicionais

const PageLayoutAbout = ({dados, title}) => {
    return (
        <div>

                <h1 className="categoryName">{title}</h1>

                {/* Container para o layout */}
                <Container fluid="true">

                    {/* Map de dados para os dados */}
                    {dados.map((data, key) => {
                        return(

                            <div key={key}>
                                <h1 className="categoryName">{data.title}</h1>

                                <Row>
                                    <Col xs lg="6">
                                    {/* Criamos um div para conter a lista de itens */}
                                        <img src={data.imgSrc} alt={data.imgAlt} className="heroImgMobile" />

                                        {/* Outro map para os parágrafos */}
                                        {data.text.map((data2, key2) => {

                                            return (
                                                <div key={key2}>

                                                    <div className="paragraph tabbed">
                                                        {data2.paragraph1}
                                                    </div>

                                                    <div className="paragraph tabbed">
                                                        {data2.paragraph2}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        
                                    </Col>

                                    <Col lg="6">

                                        <img src={data.imgSrc} alt={data.imgAlt} className="heroImg" />
                                        
                                    </Col>
                                </Row>

                                <br/>

                            </div>
                        );
                    })}

                </Container>

            </div>
    )
}

export default PageLayoutAbout;