// Imports React, rotas
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Container, Row, Col } from "react-bootstrap";

import almoco from './../../assets/mobile/almoco-alt.jpg';

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

                <Container fluid="true">

                    {dadosServicos.map((data, key) => {
                        return(

                            <div key={key}>
                                <h1 className="categoryName">{data.title}</h1>

                                <Row>
                                    <Col xs lg="7">
                                    {/* Criamos um div para conter a lista de itens */}
                                        <img src={data.imgSrc} alt={data.imgAlt} className="heroImgMobile" />

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