import React from "react";
import Button from "react-bootstrap/Button";


import Form from 'react-bootstrap/Form'

import AdicionarRefeicao from './components/AdicionarRefeicao'
import AddItem from './components/AddItem'

import CustomTable from './components/CustomTable'

import './styles/AdicionarItem.scss'

import { Container, Row, Col } from 'react-bootstrap'

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion";

import './styles/accordion.css'

export default function AdicionarItem() {
    return (
        <div className="main">
        
            <Container fluid>
            <h1>Itens</h1>
            
                <Accordion allowZeroExpanded="true" preExpanded={['1']} allowMultipleExpanded>
                    <AccordionItem uuid="1">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Adicionar itens
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <Row>   
                                    <Col xs="12" lg="4">
                                        <AdicionarRefeicao />
                                    </Col>
                                

                                <Col xs="12" lg="4">
                                    <AddItem
                                        itemName="Acompanhamento"
                                        controlId="refeicaoInput"
                                        label="Acompanhamento"
                                        placeholder="Nome do acompanhamento..."
                                        value
                                        onClick
                                    />
                                </Col>

                                <Col xs="12" lg="4">
                                    <AddItem
                                        itemName="Salada"
                                        controlId="saladaInput"
                                        label="Salada"
                                        placeholder="Nome da salada..."
                                        value
                                        onClick
                                    />
                                </Col>
                            </Row>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="2">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Refeições cadastradas
                                
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <CustomTable
                                title="Refeição"
                                isRefeicao={true}
                            />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="3">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Acompanhamentos cadastrados
                                
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <CustomTable
                                title="Acompanhamento"
                                isRefeicao={false}
                            />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="4">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Saladas cadastradas
                                
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <CustomTable
                                title="Salada"
                                isRefeicao={false}
                            />
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>

                
                
        
            </Container>
        </div>
        
    );
}
