// Imports React, rotas
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Import Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

// Import dados
import { dadosServicos } from "../../data/dadosSobreNos.js";

// Import icons
import { FaBars } from 'react-icons/fa';

const Servicos = ({handleToggleSidebar}) => {
    return (
        <Router>
            <div className="main">

                
            {/* Ícone para abrir menu, só aparece quando menor md ou menor */}
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
                
            </div>

            <div>

                <h1 className="categoryName">SERVIÇOS</h1>

                {/* Container para o layout */}
                <Container fluid="true">

                    {/* Map de dados para os dados */}
                    {dadosServicos.map((data, key) => {
                        return(

                            <div key={key}>
                                <h1 className="categoryName">{data.title}</h1>

                                <Row>
                                    <Col xs lg="7">
                                    {/* Criamos um div para conter a lista de itens */}
                                        <img src={data.imgSrc} alt={data.imgAlt} className="heroImgMobile" />

                                        {/* Outro map para os parágrafos */}
                                        {data.text.map((data2, key2) => {

                                            return (
                                                <div key={key2}>

                                                    <div className="paragraph">
                                                        {data2.paragraph1}
                                                    </div>

                                                    <div className="paragraph">
                                                        {data2.paragraph2}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                        
                                    </Col>

                                    <Col lg="5">

                                        <img src={data.imgSrc} alt={data.imgAlt} className="heroImg" />
                                        
                                    </Col>
                                </Row>

                                <br/>

                            </div>
                        );
                    })}

                </Container>

            </div>

            </div>
        </Router>
    );
}

export default Servicos;