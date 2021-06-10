import React from "react";
import  Button from "react-bootstrap/Button";
import Input from './components/Input'

import Form from 'react-bootstrap/Form'

import './Login.scss'

export default function AdicionarItem() {
    return (
        <>
            <h2 className="categoryName">Adicionar Item</h2>
            <Form>
                <Form.Label className="itemName">Nome item</Form.Label>
                <Form.Row>
                    <Form.Group controlId="loginUser">
                        <Form.Label>Usuário</Form.Label>
                        <Form.Control type="text" placeholder="Usuário" />
                    </Form.Group>

                    <Form.Group controlId="loginPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>


                </Form.Row>
            
                <Form.Row>
                    
                </Form.Row>
                
                <Form.Row className="button-row">
                    <Button type="submit"  className="btn-submit" block>
                        ENTRAR
                    </Button>
                </Form.Row>
                
                </Form>
        </>
        
    );
}
