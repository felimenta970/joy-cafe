import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import  Button from "react-bootstrap/Button";
import { Col } from 'react-bootstrap'

export default () => {

    const [name, setName] = useState('')
    const [value, setValue] = useState('')


    return(
    <>
        <Form className="insert-box">
            <Form.Row>
                <Form.Label className="itemName">Refeição</Form.Label>
            </Form.Row>
            
            <Form.Row>
                <Col xs="12" lg="9">
                    <Form.Group controlId="refeicaoInput">
                        <Form.Label>Refeição</Form.Label>
                        <Form.Control type="text" placeholder="Nome da refeição..." value={name} onChange={e => setName(e.target.value)}/>
                    </Form.Group>
                </Col>
                <Col xs="12" lg="3">
                    <Form.Group controlId="valueInput">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control type="number" placeholder="Valor..." value={value} onChange={e => setValue(e.target.value)}/>
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row className="button-row btn-right btn-font">
                <Button type="submit" variant="danger">
                    CANCELAR
                </Button>
                <Button type="submit" className="btn-submit">
                    SALVAR
                </Button>
            </Form.Row>
        </Form>
        
    </>
    )
}