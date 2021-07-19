import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import  Button from "react-bootstrap/Button";
import { Col, Row } from 'react-bootstrap'

import BootstrapSelect from 'react-bootstrap-select-dropdown'

import '../styles/selector.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {

    const [name, setName] = useState('')
    const [value, setValue] = useState('');

    var refeicao = [
        {
            "labelKey": "id",
            "value": "Almoco1",
            "style": {
                "padding-top": "5px",
                "padding-bottom": "5px"
            }
        },
        {
            "labelKey": "id2",
            "value": "Almoco2",
            "style": {
                "padding-top": "7px",
                "padding-bottom": "7px"
            }
        },
        {
            "labelKey": "id3",
            "value": "Almoco3",
            "style": {
                "padding-top": "7px",
                "padding-bottom": "7px"
            }
        },
        {
            "labelKey": "id4",
            "value": "Almoco4",
            "style": {
                "padding-top": "7px",
                "padding-bottom": "7px"
            }
        },
        {
            "labelKey": "id7",
            "value": "Almoco7",
            "style": {
                "padding-top": "7px",
                "padding-bottom": "7px"
            }
        },
        {
            "labelKey": "i6",
            "value": "Almoco6",
            "style": {
                "padding-top": "7px",
                "padding-bottom": "7px"
            }
        },
    ]

    var acompanhamento = [
        {
            "labelKey": "id",
            "value": "Acompanhamento1",
            "style": {
                "padding-top": "10px",
            }
        },
        {
            "labelKey": "id2",
            "value": "Acompanhamento2",
            "style": {
                "padding-top": "10px",
            }
        },
        {
            "labelKey": "id3",
            "value": "Acompanhamento3"
        },
        {
            "labelKey": "id4",
            "value": "Acompanhamento4"
        },
        {
            "labelKey": "id5",
            "value": "Acompanhamento5"
        },
        {
            "labelKey": "i6",
            "value": "Acompanhamento6"
        },
    ]

    var salada = [
        {
            "labelKey": "id",
            "value": "Salada1"
        },
        {
            "labelKey": "id2",
            "value": "Salada2"
        },
        {
            "labelKey": "id3",
            "value": "Salada3"
        },
        {
            "labelKey": "id4",
            "value": "Salada4"
        },
        {
            "labelKey": "id5",
            "value": "Salada5"
        },
        {
            "labelKey": "i6",
            "value": "Salada6"
        },
    ]


    return(
    <>
        <Form className="insert-box">
            
                <Col xs="12" className="adicionarRefeicaoAlmoco">
                    <Row className="refeicaoRow">
                        <Col xs="12" lg="4">
                            <Form.Label className="itemNameAlmoco">Refeição</Form.Label>
                            <BootstrapSelect options={refeicao} showSearch={true}  selectStyle="selector" placeholder="Selecione..."/>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Label className="itemNameAlmoco">Acompanhamento</Form.Label>
                            <BootstrapSelect options={acompanhamento} showSearch={true} selectStyle="selector" placeholder="Selecione..."/>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Label className="itemNameAlmoco">Salada</Form.Label>
                            <BootstrapSelect options={salada} showSearch={true} selectStyle="selector" placeholder="Selecione..."/>
                        </Col>
                        
                    </Row>

                    <hr className="hr-almoco"/>

                    <Row className="refeicaoRow">
                        <Col xs="12" lg="4">
                            <Form.Label className="itemNameAlmoco">Refeição</Form.Label>
                            <BootstrapSelect options={refeicao} showSearch={true}  selectStyle="selector" placeholder="Selecione..."/>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Label className="itemNameAlmoco">Acompanhamento</Form.Label>
                            <BootstrapSelect options={acompanhamento} showSearch={true} selectStyle="selector" placeholder="Selecione..."/>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Label className="itemNameAlmoco">Salada</Form.Label>
                            <BootstrapSelect options={salada} showSearch={true} selectStyle="selector" placeholder="Selecione..."/>
                        </Col>
                        
                    </Row>

                    <hr className="hr-almoco"/>

                    <Row className="refeicaoRow">
                        <Col xs="12" lg="4">
                            <Form.Label className="itemNameAlmoco">Refeição</Form.Label>
                            <BootstrapSelect options={refeicao} showSearch={true}  selectStyle="selector" placeholder="Selecione..."/>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Label className="itemNameAlmoco">Acompanhamento</Form.Label>
                            <BootstrapSelect options={acompanhamento} showSearch={true} selectStyle="selector" placeholder="Selecione..."/>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Label className="itemNameAlmoco">Salada</Form.Label>
                            <BootstrapSelect options={salada} showSearch={true} selectStyle="selector" placeholder="Selecione..."/>
                        </Col>
                        
                    </Row>

                    <hr className="hr-almoco"/>

                    <Row className="refeicaoRow">
                        <Col xs="12" lg="4">
                            <Form.Label className="itemNameAlmoco">Refeição</Form.Label>
                            <BootstrapSelect options={refeicao} showSearch={true}  selectStyle="selector" placeholder="Selecione..."/>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Label className="itemNameAlmoco">Acompanhamento</Form.Label>
                            <BootstrapSelect options={acompanhamento} showSearch={true} selectStyle="selector" placeholder="Selecione..."/>
                        </Col>
                        <Col xs="12" lg="4">
                            <Form.Label className="itemNameAlmoco">Salada</Form.Label>
                            <BootstrapSelect options={salada} showSearch={true} selectStyle="selector" placeholder="Selecione..."/>
                        </Col>
                        
                    </Row>

                    <Row className="button-row btn-right btn-font">
                        <Button type="submit" variant="danger">
                            CANCELAR
                        </Button>
                        <Button type="submit" className="btn-submit">
                            SALVAR
                        </Button>
                    </Row>
                    
                </Col>
            
            <Form.Row >
                
            </Form.Row>
        </Form>
        
    </>
    )
}