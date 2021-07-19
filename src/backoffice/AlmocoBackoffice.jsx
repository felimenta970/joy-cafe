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
import AdicionarAlmoco from "./components/AdicionarAlmoco";

export default function AdicionarItem() {
    return (
        <div className="main">
        
            <Container fluid>
            <h1>Almoco</h1>
                
            <AdicionarAlmoco />

            </Container>
        </div>
        
    );
}
