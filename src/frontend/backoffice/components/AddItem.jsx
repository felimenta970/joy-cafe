import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import  Button from "react-bootstrap/Button";

export default ({itemName, label, placeholder, controlId}) => {

    const [value, setValue] = useState('');

    console.log(value)

    return (
    <>
        <Form className="insert-box">
            <Form.Row>
                <Form.Label className="itemName">{itemName}</Form.Label>
            </Form.Row>
            
            <Form.Row>
                <Form.Group controlId={controlId}>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control type="text" value={value} placeholder={placeholder} onChange={e => setValue(e.target.value)}/>
                </Form.Group>
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