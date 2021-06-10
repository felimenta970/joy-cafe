import React from "react";
import  Button from "react-bootstrap/Button";
import Input from './components/Input'

import Form from 'react-bootstrap/Form'

import './styles/AdicionarItem.scss'

import { Container, Row, Col } from 'react-bootstrap'

export default function AdicionarItem() {
    return (

            
            <Container fluid className="main">

            
                <h1>Itens</h1>
            
            
                <Row>
                    <Col xs="12" lg="4">
                        <Form>
                            <Form.Row>
                                <Form.Label className="itemName">Refeição</Form.Label>
                            </Form.Row>
                            
                            <Form.Row>
                                <Col xs="12" lg="9">
                                    <Form.Group controlId="refeicaoInput">
                                        <Form.Label>Refeição</Form.Label>
                                        <Form.Control type="text" placeholder="Nome da refeição..." />
                                    </Form.Group>
                                </Col>
                                <Col xs="12" lg="3">
                                    <Form.Group controlId="valueInput">
                                        <Form.Label>Valor</Form.Label>
                                        <Form.Control type="number" placeholder="Valor..." />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row className="button-row btn-right">
                                <Button type="submit" variant="danger">
                                    CANCELAR
                                </Button>
                                <Button type="submit" className="btn-submit">
                                    SALVAR
                                </Button>
                            </Form.Row>
                        </Form>
                    </Col>

                    <Col xs="12" lg="4">
                        <Form>
                            <Form.Label className="itemName">Acompanhamento</Form.Label>
                            <Form.Row>
                                <Form.Group controlId="refeicaoInput">
                                    <Form.Label>Acompanhamento</Form.Label>
                                    <Form.Control type="text" placeholder="Nome do acompanhamento..." />
                                </Form.Group>
                            </Form.Row>

                            
                            <Form.Row className="button-row btn-right">
                                <Button type="submit" variant="danger">
                                    CANCELAR
                                </Button>
                                <Button type="submit" className="btn-submit">
                                    SALVAR
                                </Button>
                            </Form.Row>
                            
                        </Form>
                    </Col>

                    <Col xs="12" lg="4">
                        <Form>
                            <Form.Label className="itemName">Salada</Form.Label>
                            <Form.Row>
                                <Form.Group controlId="refeicaoInput">
                                    <Form.Label>Salada</Form.Label>
                                    <Form.Control type="text" placeholder="Nome da salada..." />
                                </Form.Group>
                            </Form.Row>

                            
                            <Form.Row className="button-row btn-right">
                                <Button type="submit" variant="danger">
                                    CANCELAR
                                </Button>
                                <Button type="submit" className="btn-submit">
                                    SALVAR
                                </Button>
                            </Form.Row>
                            
                        </Form>
                    </Col>

                </Row>
            </Container>
        
        
    );
}
