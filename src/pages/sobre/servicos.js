// Imports React, rotas
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Container, Row, Col } from "react-bootstrap";

import almoco from './../../assets/mobile/almoco-alt.jpg';
import almocoBig from './../../assets/desktop/almoco.jpg';

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

        <Row>
            <Col xs lg="7">
            {/* Criamos um div para conter a lista de itens */}
                <img src={almoco} alt="Foto de prato de comida" className="heroImgMobile" />
                <div className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec turpis in sapien fermentum pharetra ut faucibus nibh. Integer tempus pretium tincidunt. Nullam ante dui, pulvinar non tortor quis, imperdiet pulvinar ligula. Integer gravida interdum cursus. Suspendisse sollicitudin facilisis sodales. Aenean egestas eros sed dolor gravida consectetur. Sed blandit massa commodo pulvinar molestie. Phasellus id sem nibh. Vestibulum aliquet vitae urna at rhoncus. Nunc non euismod dolor, eu efficitur risus. Curabitur aliquet velit ac dui placerat, ac ultrices lectus malesuada. Vivamus vitae sagittis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>

                <div className="paragraph">
                    Pellentesque aliquet, nulla rhoncus bibendum lacinia, orci urna pretium enim, id convallis eros elit at nibh. Nulla feugiat nibh in egestas sodales. Curabitur consectetur, turpis vitae congue dictum, sapien quam pellentesque orci, non sagittis ex massa quis nisl. In blandit justo eget lorem maximus auctor. Maecenas semper interdum dolor. Mauris congue, mauris eget aliquam consectetur, arcu felis consequat ipsum, id tincidunt diam risus eget metus. Praesent tristique blandit elit in volutpat.
                </div>

            </Col>

            <Col lg="5">
                <img src={almoco} alt="Foto de prato de comida" className="heroImg" />
                
            </Col>
        </Row>

        <br/>

        <h1 className="categoryName">OS CABEÇAS</h1>

        <Row>
            <Col xs lg="7">
            {/* Criamos um div para conter a lista de itens */}
                <img src={almoco} alt="Foto de prato de comida" className="heroImgMobile" />
                <div className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec turpis in sapien fermentum pharetra ut faucibus nibh. Integer tempus pretium tincidunt. Nullam ante dui, pulvinar non tortor quis, imperdiet pulvinar ligula. Integer gravida interdum cursus. Suspendisse sollicitudin facilisis sodales. Aenean egestas eros sed dolor gravida consectetur. Sed blandit massa commodo pulvinar molestie. Phasellus id sem nibh. Vestibulum aliquet vitae urna at rhoncus. Nunc non euismod dolor, eu efficitur risus. Curabitur aliquet velit ac dui placerat, ac ultrices lectus malesuada. Vivamus vitae sagittis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>

                <div className="paragraph">
                    Pellentesque aliquet, nulla rhoncus bibendum lacinia, orci urna pretium enim, id convallis eros elit at nibh. Nulla feugiat nibh in egestas sodales. Curabitur consectetur, turpis vitae congue dictum, sapien quam pellentesque orci, non sagittis ex massa quis nisl. In blandit justo eget lorem maximus auctor. Maecenas semper interdum dolor. Mauris congue, mauris eget aliquam consectetur, arcu felis consequat ipsum, id tincidunt diam risus eget metus. Praesent tristique blandit elit in volutpat.
                </div>

            </Col>

            <Col lg="5">
                <img src={almoco} alt="Foto de prato de comida" className="heroImg" />
                
            </Col>
        </Row>

        <br/>

        <h1 className="categoryName">MISSÃO, VALORES E VISÃO</h1>

        <Row>
            <Col xs lg="7">
            {/* Criamos um div para conter a lista de itens */}
                <img src={almoco} alt="Foto de prato de comida" className="heroImgMobile" />
                <div className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec turpis in sapien fermentum pharetra ut faucibus nibh. Integer tempus pretium tincidunt. Nullam ante dui, pulvinar non tortor quis, imperdiet pulvinar ligula. Integer gravida interdum cursus. Suspendisse sollicitudin facilisis sodales. Aenean egestas eros sed dolor gravida consectetur. Sed blandit massa commodo pulvinar molestie. Phasellus id sem nibh. Vestibulum aliquet vitae urna at rhoncus. Nunc non euismod dolor, eu efficitur risus. Curabitur aliquet velit ac dui placerat, ac ultrices lectus malesuada. Vivamus vitae sagittis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>

                <div className="paragraph">
                    Pellentesque aliquet, nulla rhoncus bibendum lacinia, orci urna pretium enim, id convallis eros elit at nibh. Nulla feugiat nibh in egestas sodales. Curabitur consectetur, turpis vitae congue dictum, sapien quam pellentesque orci, non sagittis ex massa quis nisl. In blandit justo eget lorem maximus auctor. Maecenas semper interdum dolor. Mauris congue, mauris eget aliquam consectetur, arcu felis consequat ipsum, id tincidunt diam risus eget metus. Praesent tristique blandit elit in volutpat.
                </div>

            </Col>

            <Col lg="5">
                <img src={almoco} alt="Foto de prato de comida" className="heroImg" />
                
            </Col>
        </Row>

</Container>

</div>

</div>
        </Router>
    );
}

export default Servicos;